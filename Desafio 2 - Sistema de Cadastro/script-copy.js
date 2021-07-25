const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let email = document.getElementById('email').value;
    let email2 = document.getElementById('email2').value;
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let sex = document.getElementById('sex').value;
    let cpf = document.getElementById('cpf').value;
    let tel = document.getElementById('tel').value;
    let cel = document.getElementById('cel').value;
    let nasci = document.getElementById('nasci').value;
    let pass = document.getElementById('pass').value;
    let pass2 = document.getElementById('pass2').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let comple = document.getElementById('comple').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let data ={
        email,
        email2,
        name,
        surname,
        sex,
        cpf,
        tel,
        cel,
        nasci,
        pass,
        pass2,
        cep,
        rua,
        numero,
        comple,
        bairro,
        cidade,
        estado
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    let carregando = `<p>Cadastrado!</p>`
    content.innerHTML = carregando

})

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let produto = document.getElementById('produto').value;
    console.log(produto);
    let codigo = document.getElementById('codigo').value;
    console.log(codigo);
    let departamento = document.getElementById('departamento').value;
    console.log(departamento);
    let loja = document.getElementById('loja').value;
    console.log(loja);
    let quantidade = document.getElementById('quantidade').value;
    console.log(quantidade);
    let tamanho = document.getElementById('tamanho').value;
    console.log(tamanho);
    let marca = document.getElementById('marca').value;
    console.log(marca);
    let preco = document.getElementById('preco').value;
    console.log(preco);
    let corprin = document.getElementById('corprin').value;
    console.log(corprin);
    let material = document.getElementById('material').value;
    console.log(material);
    let data ={
        "produto": produto,
        "codigo": codigo,
        "departamento": departamento,
        "loja": loja,
        "quantidade": quantidade,
        "tamanho": tamanho,
        "marca":marca,
        "preco": preco,
        "corprin": corprin,
        "material": material
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    let carregando = `<p>Cadastrado!</p>`
    content.innerHTML = carregando

})