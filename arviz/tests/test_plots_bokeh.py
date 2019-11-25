"""Tests use the 'bokeh' backend."""
# pylint: disable=redefined-outer-name,too-many-lines
from pandas import DataFrame
import numpy as np
import pytest

from .helpers import (  # pylint: disable=unused-import
    eight_schools_params,
    models,
    create_model,
    multidim_models,
    create_multidimensional_model,
)
from ..rcparams import rcParams, rc_context
from ..plots import (
    plot_autocorr,
    plot_compare,
    plot_density,
    plot_elpd,
    plot_energy,
    plot_trace,
    plot_kde,
    plot_dist,
)
from ..stats import compare, loo, waic

rcParams["data.load"] = "eager"


@pytest.fixture(scope="module")
def data(eight_schools_params):
    data = eight_schools_params
    return data


@pytest.fixture(scope="module")
def df_trace():
    return DataFrame({"a": np.random.poisson(2.3, 100)})


@pytest.fixture(scope="module")
def discrete_model():
    """Simple fixture for random discrete model"""
    return {"x": np.random.randint(10, size=100), "y": np.random.randint(10, size=100)}


@pytest.fixture(scope="module")
def continuous_model():
    """Simple fixture for random continuous model"""
    return {"x": np.random.beta(2, 5, size=100), "y": np.random.beta(2, 5, size=100)}


@pytest.mark.parametrize(
    "kwargs",
    [
        {"point_estimate": "mean"},
        {"point_estimate": "median"},
        {"credible_interval": 0.94},
        {"credible_interval": 1},
        {"outline": True},
        {"hpd_markers": ["v"]},
        {"shade": 1},
    ],
)
def test_plot_density_float(models, kwargs):
    obj = [getattr(models, model_fit) for model_fit in ["model_1", "model_2"]]
    axes = plot_density(obj, backend="bokeh", show=False, **kwargs)
    assert axes.shape[0] >= 6
    assert axes.shape[0] >= 3


def test_plot_density_discrete(discrete_model):
    axes = plot_density(discrete_model, shade=0.9, backend="bokeh", show=False)
    assert axes.shape[0] == 1


def test_plot_density_bad_kwargs(models):
    obj = [getattr(models, model_fit) for model_fit in ["model_1", "model_2"]]
    with pytest.raises(ValueError):
        plot_density(obj, point_estimate="bad_value", backend="bokeh", show=False)

    with pytest.raises(ValueError):
        plot_density(
            obj,
            data_labels=["bad_value_{}".format(i) for i in range(len(obj) + 10)],
            backend="bokeh",
            show=False,
        )

    with pytest.raises(ValueError):
        plot_density(obj, credible_interval=2, backend="bokeh", show=False)


@pytest.mark.parametrize(
    "kwargs",
    [
        {},
        {"var_names": "mu"},
        {"var_names": ["mu", "tau"]},
        {"combined": True},
        {"compact": True},
        {"combined": True, "compact": True, "legend": True},
        {"divergences": "top"},
        {"divergences": False},
        {"lines": [("mu", {}, [1, 2])]},
        {"lines": [("mu", {}, 8)]},
    ],
)
def test_plot_trace(models, kwargs):
    axes = plot_trace(models.model_1, backend="bokeh", show=False, **kwargs)
    assert axes.shape


def test_plot_trace_discrete(discrete_model):
    axes = plot_trace(discrete_model, backend="bokeh", show=False)
    assert axes.shape


def test_plot_trace_max_subplots_warning(models):
    with pytest.warns(SyntaxWarning):
        with rc_context(rc={"plot.max_subplots": 1}):
            axes = plot_trace(models.model_1, backend="bokeh", show=False)
    assert axes.shape


@pytest.mark.parametrize(
    "kwargs",
    [
        {"plot_kwargs": {"line_dash": "solid"}},
        {"contour": True, "fill_last": False},
        {
            "contour": True,
            "contourf_kwargs": {"cmap": "plasma"},
            "contour_kwargs": {"line_width": 1},
        },
        {"contour": False},
        {"contour": False, "pcolormesh_kwargs": {"cmap": "plasma"}},
    ],
)
def test_plot_kde(continuous_model, kwargs):
    axes = plot_kde(
        continuous_model["x"], continuous_model["y"], backend="bokeh", show=False, **kwargs
    )
    assert axes


@pytest.mark.parametrize(
    "kwargs",
    [
        {"cumulative": True},
        {"cumulative": True, "plot_kwargs": {"line_dash": "dashed"}},
        {"rug": True},
        {"rug": True, "rug_kwargs": {"line_alpha": 0.2}, "rotated": True},
    ],
)
def test_plot_kde_cumulative(continuous_model, kwargs):
    axes = plot_kde(continuous_model["x"], backend="bokeh", show=False, **kwargs)
    assert axes


@pytest.mark.parametrize("kwargs", [{"kind": "hist"}, {"kind": "kde"}])
def test_plot_dist(continuous_model, kwargs):
    axes = plot_dist(continuous_model["x"], backend="bokeh", show=False, **kwargs)
    assert axes


def test_plot_kde_1d(continuous_model):
    axes = plot_kde(continuous_model["y"], backend="bokeh", show=False)
    assert axes


@pytest.mark.parametrize(
    "kwargs",
    [
        {"contour": True, "fill_last": False},
        {"contour": True, "contourf_kwargs": {"cmap": "plasma"},},
        {"contour": False},
        {"contour": False, "pcolormesh_kwargs": {"cmap": "plasma"}},
    ],
)
def test_plot_kde_2d(continuous_model, kwargs):
    axes = plot_kde(continuous_model["x"], continuous_model["y"], **kwargs)
    assert axes


@pytest.mark.parametrize(
    "kwargs", [{"plot_kwargs": {"line_dash": "solid"}}, {"cumulative": True}, {"rug": True}]
)
def test_plot_kde_quantiles(continuous_model, kwargs):
    axes = plot_kde(
        continuous_model["x"], quantiles=[0.05, 0.5, 0.95], show=False, backend="bokeh", **kwargs
    )
    assert axes


def test_plot_autocorr_short_chain():
    """Check that logic for small chain defaulting doesn't cause exception"""
    chain = np.arange(10)
    axes = plot_autocorr(chain, backend="bokeh", show=False)
    assert axes


def test_plot_autocorr_uncombined(models):
    axes = plot_autocorr(models.model_1, combined=False, backend="bokeh", show=False)
    assert axes.shape[0] == 10
    max_subplots = (
        np.inf if rcParams["plot.max_subplots"] is None else rcParams["plot.max_subplots"]
    )
    assert len([ax for ax in axes.ravel() if ax is not None]) == min(72, max_subplots)


def test_plot_autocorr_combined(models):
    axes = plot_autocorr(models.model_1, combined=True, backend="bokeh", show=False)
    assert axes.shape[0] == 6
    assert axes.shape[1] == 3


@pytest.mark.parametrize("var_names", (None, "mu", ["mu", "tau"]))
def test_plot_autocorr_var_names(models, var_names):
    axes = plot_autocorr(
        models.model_1, var_names=var_names, combined=True, backend="bokeh", show=False
    )
    assert axes.shape


@pytest.mark.parametrize(
    "kwargs", [{"insample_dev": False}, {"plot_standard_error": False}, {"plot_ic_diff": False}]
)
def test_plot_compare(models, kwargs):

    model_compare = compare({"Model 1": models.model_1, "Model 2": models.model_2})

    axes = plot_compare(model_compare, backend="bokeh", show=False, **kwargs)
    assert axes


def test_plot_compare_manual(models):
    """Test compare plot without scale column"""
    model_compare = compare({"Model 1": models.model_1, "Model 2": models.model_2})

    # remove "scale" column
    del model_compare["waic_scale"]
    axes = plot_compare(model_compare, backend="bokeh", show=False)
    assert axes


def test_plot_compare_no_ic(models):
    """Check exception is raised if model_compare doesn't contain a valid information criterion"""
    model_compare = compare({"Model 1": models.model_1, "Model 2": models.model_2})

    # Drop column needed for plotting
    model_compare = model_compare.drop("waic", axis=1)
    with pytest.raises(ValueError) as err:
        plot_compare(model_compare, backend="bokeh", show=False)

    assert "comp_df must contain one of the following" in str(err.value)
    assert "['waic', 'loo']" in str(err.value)


@pytest.mark.parametrize(
    "kwargs", [{}, {"ic": "loo"}, {"xlabels": True, "scale": "log"},],
)
@pytest.mark.parametrize("add_model", [False, True])
@pytest.mark.parametrize("use_elpddata", [False, True])
def test_plot_elpd(models, add_model, use_elpddata, kwargs):
    model_dict = {"Model 1": models.model_1, "Model 2": models.model_2}
    if add_model:
        model_dict["Model 3"] = create_model(seed=12)

    if use_elpddata:
        ic = kwargs.get("ic", "waic")
        scale = kwargs.get("scale", "deviance")
        if ic == "waic":
            model_dict = {k: waic(v, scale=scale, pointwise=True) for k, v in model_dict.items()}
        else:
            model_dict = {k: loo(v, scale=scale, pointwise=True) for k, v in model_dict.items()}

    axes = plot_elpd(model_dict, backend="bokeh", show=False, **kwargs)
    assert np.any(axes)
    if add_model:
        assert axes.shape[0] == axes.shape[1]
        assert axes.shape[0] == len(model_dict) - 1


@pytest.mark.parametrize(
    "kwargs", [{}, {"ic": "loo"}, {"xlabels": True, "scale": "log"},],
)
@pytest.mark.parametrize("add_model", [False, True])
@pytest.mark.parametrize("use_elpddata", [False, True])
def test_plot_elpd_multidim(multidim_models, add_model, use_elpddata, kwargs):
    model_dict = {"Model 1": multidim_models.model_1, "Model 2": multidim_models.model_2}
    if add_model:
        model_dict["Model 3"] = create_multidimensional_model(seed=12)

    if use_elpddata:
        ic = kwargs.get("ic", "waic")
        scale = kwargs.get("scale", "deviance")
        if ic == "waic":
            model_dict = {k: waic(v, scale=scale, pointwise=True) for k, v in model_dict.items()}
        else:
            model_dict = {k: loo(v, scale=scale, pointwise=True) for k, v in model_dict.items()}

    axes = plot_elpd(model_dict, backend="bokeh", show=False, **kwargs)
    assert np.any(axes)
    if add_model:
        assert axes.shape[0] == axes.shape[1]
        assert axes.shape[0] == len(model_dict) - 1


@pytest.mark.parametrize("kind", ["kde", "hist"])
def test_plot_energy(models, kind):
    assert plot_energy(models.model_1, kind=kind, backend="bokeh", show=False)


def test_plot_energy_bad(models):
    with pytest.raises(ValueError):
        plot_energy(models.model_1, kind="bad_kind", backend="bokeh", show=False)