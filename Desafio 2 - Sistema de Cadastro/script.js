const form1 = document.getElementById('formCliente')

if(form1 != null){
    form1.addEventListener('submit', (e) =>{
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
        
        if(localStorage.getItem('produto') == null){
            let dataCliente =[{
                "email": email,
                "email2": email2,
                "name": name,
                "surname": surname,
                "sex": sex,
                "cpf": cpf,
                "tel":tel,
                "cel": cel,
                "nasci": nasci,
                "pass": pass,
                "pass2": pass2,
                "cep": cep,
                "rua": rua,
                "numero": numero,
                "comple": comple,
                "bairro": bairro,
                "cidade": cidade,
                "estado": estado,
            }]
        let convertDataCliente = JSON.stringify(dataCliente);
        localStorage.setItem('lead', convertDataCliente)
        }else{
        let dataCliente = JSON.parse(localStorage.getItem('produto'));
        dataCliente.push({
            "email": email,
            "email2": email2,
            "name": name,
            "surname": surname,
            "sex": sex,
            "cpf": cpf,
            "tel": tel,
            "cel": cel,
            "nasci": nasci,
            "pass": pass,
            "pass2": pass2,
            "cep": cep,
            "rua": rua,
            "numero": numero,
            "comple": comple,
            "bairro": bairro,
            "cidade": cidade,
            "estado": estado,
          });
          let convertDataCliente = JSON.stringify(dataCliente);
          localStorage.setItem('produto',convertDataCliente);    
    }

        let content = document.getElementById('content')
        let carregando = `<p>Cadastrado!</p>`
        content.innerHTML = carregando

    })
}

const form2 = document.getElementById('formProduto')

if(form2 != null){
form2.addEventListener('submit', (e) =>{
    e.preventDefault();
    let produto = document.getElementById('produto').value;
    console.log(produto);
    let codigo = document.getElementById('codigo').value;
    let departamento = document.getElementById('departamento').value;
    let loja = document.getElementById('loja').value;
    let quantidade = document.getElementById('quantidade').value;
    let tamanho = document.getElementById('tamanho').value;
    let marca = document.getElementById('marca').value;
    let preco = document.getElementById('preco').value;
    let corprin = document.getElementById('corprin').value;
    let material = document.getElementById('material').value;
    
    if(localStorage.getItem('produto') == null){
    let dataProduto =[{
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
    }]
    let convertDataProduto = JSON.stringify(dataProduto);
    localStorage.setItem('produto', convertDataProduto)
    }else{
        let dataProduto = JSON.parse(localStorage.getItem('produto'));
        dataProduto.push({
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
          });
          let convertDataProduto = JSON.stringify(dataProduto);
          localStorage.setItem('produto',convertDataProduto);    
    }


     let content = document.getElementById('content')
     let carregando = `<p>Cadastrado!</p>`
     content.innerHTML = carregando

})
}