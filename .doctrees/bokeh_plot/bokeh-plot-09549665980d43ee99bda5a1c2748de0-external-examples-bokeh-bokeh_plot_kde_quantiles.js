(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("943f61c9-d149-4a25-ad9b-6a0b50b2c445");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '943f61c9-d149-4a25-ad9b-6a0b50b2c445' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"0e3842c9-ab23-4d66-8a30-6681953898ef":{"roots":{"references":[{"attributes":{},"id":"69815","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"69784","type":"Patch"},{"attributes":{"children":[[{"id":"69747"},0,0]]},"id":"69820","type":"GridBox"},{"attributes":{"source":{"id":"69783"}},"id":"69787","type":"CDSView"},{"attributes":{},"id":"69816","type":"Selection"},{"attributes":{},"id":"69807","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"btkwCdFtxT/Wnyjh5qDFPz9mILn808U/qCwYkRIHxj8R8w9pKDrGP3q5B0E+bcY/43//GFSgxj9LRvfwadPGP7QM78h/Bsc/HdPmoJU5xz+Gmd54q2zHP+9f1lDBn8c/WCbOKNfSxz/A7MUA7QXIPymzvdgCOcg/knm1sBhsyD/7P62ILp/IP2QGpWBE0sg/zcycOFoFyT81k5QQcDjJP55ZjOiFa8k/ByCEwJueyT9w5nuYsdHJP9msc3DHBMo/QnNrSN03yj+qOWMg82rKPxMAW/gInso/fMZS0B7Ryj/ljEqoNATLP05TQoBKN8s/thk6WGBqyz8f4DEwdp3LP4imKQiM0Ms/8Wwh4KEDzD9aMxm4tzbMP8P5EJDNacw/K8AIaOOczD+UhgBA+c/MP/1M+BcPA80/ZhPw7yQ2zT/P2efHOmnNPzig359QnM0/oGbXd2bPzT8JLc9PfALOP3LzxieSNc4/27m+/6dozj9EgLbXvZvOP61Grq/Tzs4/FQ2mh+kBzz9+051f/zTPP+eZlTcVaM8/UGCNDyubzz+5JoXnQM7PP5F2vl+rANA/xVm6SzYa0D/6PLY3wTPQPy4gsiNMTdA/YwOuD9dm0D+X5qn7YYDQP8vJpefsmdA/AK2h03ez0D80kJ2/As3QP2hzmauN5tA/nVaVlxgA0T/ROZGDoxnRPwYdjW8uM9E/OgCJW7lM0T9v44RHRGbRP2/jhEdEZtE/b+OER0Rm0T86AIlbuUzRPwYdjW8uM9E/0TmRg6MZ0T+dVpWXGADRP2hzmauN5tA/NJCdvwLN0D8AraHTd7PQP8vJpefsmdA/l+ap+2GA0D9jA64P12bQPy4gsiNMTdA/+jy2N8Ez0D/FWbpLNhrQP5F2vl+rANA/uSaF50DOzz9QYI0PK5vPP+eZlTcVaM8/ftOdX/80zz8VDaaH6QHPP61Grq/Tzs4/RIC2172bzj/bub7/p2jOP3LzxieSNc4/CS3PT3wCzj+gZtd3Zs/NPzig359QnM0/z9nnxzppzT9mE/DvJDbNP/1M+BcPA80/lIYAQPnPzD8rwAho45zMP8P5EJDNacw/WjMZuLc2zD/xbCHgoQPMP4imKQiM0Ms/H+AxMHadyz+2GTpYYGrLP05TQoBKN8s/5YxKqDQEyz98xlLQHtHKPxMAW/gInso/qjljIPNqyj9Cc2tI3TfKP9msc3DHBMo/cOZ7mLHRyT8HIITAm57JP55ZjOiFa8k/NZOUEHA4yT/NzJw4WgXJP2QGpWBE0sg/+z+tiC6fyD+SebWwGGzIPymzvdgCOcg/wOzFAO0FyD9YJs4o19LHP+9f1lDBn8c/hpneeKtsxz8d0+aglTnHP7QM78h/Bsc/S0b38GnTxj/jf/8YVKDGP3q5B0E+bcY/EfMPaSg6xj+oLBiREgfGPz9mILn808U/1p8o4eagxT9u2TAJ0W3FP27ZMAnRbcU/","dtype":"float64","order":"little","shape":[138]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACrHAttmLAJAKscC22YsAkCtFiCQaSgCQEYaoG8wJAJALyCQARkgAkC4d4+mMxwCQBFIoMMNGAJAaM3S8jwVAkBWoZCRoxICQN0mMyuBEAJAk1gPpmcPAkBjmlhw3w0CQAjpSMPbDAJAOq8PSLkMAkCdhnw8zg0CQABw+AiiDwJAu0r7rboRAkBNzPfQTBQCQAX2MtEMGAJAp3NS3nMcAkBqNe93YyICQD4Zu9N3KAJAoj2wUO4vAkBil+8zsjcCQEpDfGLrQAJAOgnL61hKAkCYawyRT1UCQA2I20fUYAJAPItCrddrAkBl++p70XcCQI8/AmylhAJAIPMnUZeRAkBYWYQPTZ8CQKkv9ldJrQJAPRN34/W7AkC1VPWUNcoCQL74mBim2AJAV05VzZLmAkBp3tjgJfUCQLWi7Z0tAwNAksEP+bcQA0B+eZiN8B0DQCZRnOpEKgNA5cWyPsc1A0DQnMiPmkEDQDA0yQVATQNAK+QHRRJYA0A+Z4w2l2EDQIoX5+T5aQNAije0441xA0A2UdhQ93cDQFiiIjSNfQNANJopGLqCA0DCnoRcX4UDQGMPV48QiANApxvIqryJA0CkQk5+0YkDQJp/xHz4hwNAlB53buqFA0BtNPX1ZoIDQMkQXw1wfANAB7wGHs11A0ABL8pDf24DQGMevBedZQNAPUaTsABcA0DWqVg+BVEDQC3V15IpRANABOk/gCs2A0BrsSnC7SYDQAAAAAAAAAAA","dtype":"float64","order":"little","shape":[138]}},"selected":{"id":"69812"},"selection_policy":{"id":"69811"}},"id":"69788","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"69771","type":"HoverTool"},{"attributes":{"data_source":{"id":"69783"},"glyph":{"id":"69784"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69785"},"selection_glyph":null,"view":{"id":"69787"}},"id":"69786","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"69789","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"o8aAM89/0T/XqXwfWpnRPwyNeAvlstE/QHB092/M0T91U3Dj+uXRP6k2bM+F/9E/3RlouxAZ0j8S/WOnmzLSP0bgX5MmTNI/e8Nbf7Fl0j+vpldrPH/SP+SJU1fHmNI/GG1PQ1Ky0j9MUEsv3cvSP4EzRxto5dI/tRZDB/P+0j/q+T7zfRjTPx7dOt8IMtM/UsA2y5NL0z+HozK3HmXTP7uGLqOpftM/8GkqjzSY0z8kTSZ7v7HTP1kwImdKy9M/jRMeU9Xk0z/B9hk/YP7TP/bZFSvrF9Q/Kr0RF3Yx1D9foA0DAUvUP5ODCe+LZNQ/x2YF2xZ+1D/8SQHHoZfUPzAt/bIssdQ/ZRD5nrfK1D+Z8/SKQuTUP83W8HbN/dQ/ArrsYlgX1T82nehO4zDVP2uA5DpuStU/n2PgJvlj1T/URtwShH3VPwgq2P4Ol9U/PA3U6pmw1T9x8M/WJMrVP6XTy8Kv49U/2rbHrjr91T8OmsOaxRbWP0J9v4ZQMNY/d2C7cttJ1j+rQ7deZmPWP+Ams0rxfNY/FAqvNnyW1j9J7aoiB7DWP33Qpg6SydY/sbOi+hzj1j/mlp7mp/zWPxp6mtIyFtc/T12Wvr0v1z+DQJKqSEnXP7cjjpbTYtc/7AaKgl581z8g6oVu6ZXXP1XNgVp0r9c/ibB9Rv/I1z+9k3kyiuLXP/J2dR4V/Nc/JlpxCqAV2D9bPW32Ki/YP48gaeK1SNg/xANlzkBi2D/45mC6y3vYPyzKXKZWldg/Ya1YkuGu2D+VkFR+bMjYP8pzUGr34dg//lZMVoL72D8yOkhCDRXZP2cdRC6YLtk/Zx1ELpgu2T9nHUQumC7ZPzI6SEINFdk//lZMVoL72D/Kc1Bq9+HYP5WQVH5syNg/Ya1YkuGu2D8sylymVpXYP/jmYLrLe9g/xANlzkBi2D+PIGnitUjYP1s9bfYqL9g/JlpxCqAV2D/ydnUeFfzXP72TeTKK4tc/ibB9Rv/I1z9VzYFadK/XPyDqhW7pldc/7AaKgl581z+3I46W02LXP4NAkqpISdc/T12Wvr0v1z8aeprSMhbXP+aWnuan/NY/sbOi+hzj1j990KYOksnWP0ntqiIHsNY/FAqvNnyW1j/gJrNK8XzWP6tDt15mY9Y/d2C7cttJ1j9Cfb+GUDDWPw6aw5rFFtY/2rbHrjr91T+l08vCr+PVP3Hwz9YkytU/PA3U6pmw1T8IKtj+DpfVP9RG3BKEfdU/n2PgJvlj1T9rgOQ6bkrVPzad6E7jMNU/ArrsYlgX1T/N1vB2zf3UP5nz9IpC5NQ/ZRD5nrfK1D8wLf2yLLHUP/xJAcehl9Q/x2YF2xZ+1D+Tgwnvi2TUP1+gDQMBS9Q/Kr0RF3Yx1D/22RUr6xfUP8H2GT9g/tM/jRMeU9Xk0z9ZMCJnSsvTPyRNJnu/sdM/8GkqjzSY0z+7hi6jqX7TP4ejMrceZdM/UsA2y5NL0z8e3TrfCDLTP+r5PvN9GNM/tRZDB/P+0j+BM0cbaOXSP0xQSy/dy9I/GG1PQ1Ky0j/kiVNXx5jSP6+mV2s8f9I/e8Nbf7Fl0j9G4F+TJkzSPxL9Y6ebMtI/3RlouxAZ0j+pNmzPhf/RP3VTcOP65dE/QHB092/M0T8MjXgL5bLRP9epfB9amdE/o8aAM89/0T+jxoAzz3/RPw==","dtype":"float64","order":"little","shape":[158]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgoK2zZcS+j+CgrbNlxL6P5P696jLTvo/OMncdUOM+j/BK2GNXsn6P4y5m5YHB/s/3Twp4PBD+z/+a7QTYYH7P2EjgkxNwPs/NnSgADX++z9z17n7Gjz8P1M+Sglcevw/wIMtW9+4/D8L8U69lPb8P+2cu7KpM/0/HCWcImhx/T9WhSLSCK39P1rzV79D6f0/LcY+4mwk/j+Kf/09jGD+Pw93bFB2m/4/WmAgYSzV/j8tisS3+Q7/P2kC2VB1SP8/akNAnDKA/z9tSpkkN7f/PzOGyIfW7f8/4nMydf0RAEAeDiVNPywAQAAuhP/gRQBA9w9PieheAEBSmoGvWngAQNBhwqpSkQBAAXQGl3SpAED7DC6obsEAQIf4LyL91wBArrG0z6HuAEBU6jpKfQQBQHplYr1tGQFAnS+BMU8uAUAP7ezqL0IBQO3Pt8tjVQFAzOAwdZ5nAUBncWX+B3oBQOCd5pGFiwFAUMqmS3KcAUCJmvZjAK0BQCHc1iSlvAFAjGnE3lfLAUCUdaRnIdkBQFEMLChd5gFAFaDiE6PyAUCK57nLfv4BQF1PpB0TCQJAYk+XxTITAkB2t8YCYBwCQKjcD3+TJAJAoQcIwa0sAkA4fKrpdTMCQKY6/XXCOQJAkO2rnQFAAkAywXtMfEQCQO12S3wFSAJAC0htd5pKAkDemw4Q90wCQAy/dNylTQJAU6VLUDhOAkD2+1Rq6k0CQHWg8s2kTQJASsg/MpxMAkCUeF2HOksCQGYznJ9cSQJAjqlkYp5GAkAqHJc4oUMCQPY5kdN5PwJA7Csp0Ys7AkCpv4wf3zcCQLN1JTnYMwJA3+3WrHUwAkAAAAAAAAAAAA==","dtype":"float64","order":"little","shape":[158]}},"selected":{"id":"69814"},"selection_policy":{"id":"69813"}},"id":"69793","type":"ColumnDataSource"},{"attributes":{},"id":"69752","type":"LinearScale"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"69790","type":"Patch"},{"attributes":{},"id":"69757","type":"BasicTicker"},{"attributes":{"source":{"id":"69788"}},"id":"69792","type":"CDSView"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"69795","type":"Patch"},{"attributes":{"source":{"id":"69793"}},"id":"69797","type":"CDSView"},{"attributes":{},"id":"69805","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"69788"},"glyph":{"id":"69789"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69790"},"selection_glyph":null,"view":{"id":"69792"}},"id":"69791","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"69772","type":"BoxAnnotation"},{"attributes":{},"id":"69811","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"69794","type":"Patch"},{"attributes":{},"id":"69812","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[530]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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","dtype":"float64","order":"little","shape":[530]}},"selected":{"id":"69816"},"selection_policy":{"id":"69815"}},"id":"69798","type":"ColumnDataSource"},{"attributes":{},"id":"69809","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"69800","type":"Patch"},{"attributes":{},"id":"69810","type":"Selection"},{"attributes":{"source":{"id":"69798"}},"id":"69802","type":"CDSView"},{"attributes":{},"id":"69765","type":"PanTool"},{"attributes":{"data_source":{"id":"69793"},"glyph":{"id":"69794"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69795"},"selection_glyph":null,"view":{"id":"69797"}},"id":"69796","type":"GlyphRenderer"},{"attributes":{},"id":"69761","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[204]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[204]}},"selected":{"id":"69810"},"selection_policy":{"id":"69809"}},"id":"69783","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"69799","type":"Patch"},{"attributes":{},"id":"69764","type":"ResetTool"},{"attributes":{"toolbar":{"id":"69821"},"toolbar_location":"above"},"id":"69822","type":"ToolbarBox"},{"attributes":{"axis":{"id":"69760"},"dimension":1,"ticker":null},"id":"69763","type":"Grid"},{"attributes":{"formatter":{"id":"69807"},"ticker":{"id":"69757"}},"id":"69756","type":"LinearAxis"},{"attributes":{"text":""},"id":"69803","type":"Title"},{"attributes":{},"id":"69754","type":"LinearScale"},{"attributes":{},"id":"69770","type":"SaveTool"},{"attributes":{"data_source":{"id":"69798"},"glyph":{"id":"69799"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69800"},"selection_glyph":null,"view":{"id":"69802"}},"id":"69801","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"69805"},"ticker":{"id":"69761"}},"id":"69760","type":"LinearAxis"},{"attributes":{},"id":"69767","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"69785","type":"Patch"},{"attributes":{},"id":"69750","type":"DataRange1d"},{"attributes":{},"id":"69813","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"69773"}},"id":"69768","type":"LassoSelectTool"},{"attributes":{},"id":"69814","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"69764"},{"id":"69765"},{"id":"69766"},{"id":"69767"},{"id":"69768"},{"id":"69769"},{"id":"69770"},{"id":"69771"}]},"id":"69774","type":"Toolbar"},{"attributes":{"children":[{"id":"69822"},{"id":"69820"}]},"id":"69823","type":"Column"},{"attributes":{},"id":"69748","type":"DataRange1d"},{"attributes":{},"id":"69769","type":"UndoTool"},{"attributes":{"below":[{"id":"69756"}],"center":[{"id":"69759"},{"id":"69763"}],"left":[{"id":"69760"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"69786"},{"id":"69791"},{"id":"69796"},{"id":"69801"}],"title":{"id":"69803"},"toolbar":{"id":"69774"},"toolbar_location":null,"x_range":{"id":"69748"},"x_scale":{"id":"69752"},"y_range":{"id":"69750"},"y_scale":{"id":"69754"}},"id":"69747","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"69756"},"ticker":null},"id":"69759","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"69773","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"69772"}},"id":"69766","type":"BoxZoomTool"},{"attributes":{"toolbars":[{"id":"69774"}],"tools":[{"id":"69764"},{"id":"69765"},{"id":"69766"},{"id":"69767"},{"id":"69768"},{"id":"69769"},{"id":"69770"},{"id":"69771"}]},"id":"69821","type":"ProxyToolbar"}],"root_ids":["69823"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"0e3842c9-ab23-4d66-8a30-6681953898ef","root_ids":["69823"],"roots":{"69823":"943f61c9-d149-4a25-ad9b-6a0b50b2c445"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();