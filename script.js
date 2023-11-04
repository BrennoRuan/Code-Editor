function alternarModo() {
    const body = document.body;
    const output = document.getElementById('output');
    const icone = document.getElementById('modo-icone');

    if (body.classList.contains('modo-claro')) {
      body.classList.remove('modo-claro');
      body.classList.add('modo-escuro');
      icone.classList.remove('fa-moon');
      icone.classList.add('fa-sun');
      output.classList.add('modo-escuro');
    } else {
      body.classList.remove('modo-escuro');
      body.classList.add('modo-claro');
      icone.classList.remove('fa-sun');
      icone.classList.add('fa-moon');
      output.classList.remove('modo-escuro');
    }
  }

  var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    mode: "javascript",
    autoCloseBrackets: true,
    matchBrackets: true,
    theme: "dracula"
  });
  
  function runCode() {
    var code = editor.getValue();
    var output = document.getElementById('output');
    
    output.value = '';

    var oldConsoleLog = console.log;
    console.log = function (message) {
      output.value += message + '\n';
    };

    try {
      eval(code);
      console.log = oldConsoleLog;
    } catch (error) {
      output.value += 'Erro: ' + error;
    }
  }