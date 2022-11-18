{

    let a=12
    console.log(a);
    let  obj={
        name:"小敏",
        age:18

    }
    console.log(obj);


    let {name,age}=obj

    console.log(name,obj);

    let o={
        ...obj,
        address:"广州"
    }
    console.log(o, o.address);
    Object.assign({},o,{hobby:[]})
    
}

