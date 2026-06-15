const params = new URLSearchParams(window.location.search);

document.getElementById("resultado").innerHTML = `
  <p><strong>inputNombre:</strong> ${params.get("nombre")}</p>
  <p><strong>inputEmail:</strong> ${params.get("email")}</p>
  <p><strong>inputEdad:</strong> ${params.get("edad")}</p>
  <p><strong>inputPais:</strong> ${params.get("pais")}</p>
  <p><strong>inputTerminos:</strong> ${params.get("terminos")}</p>
`;