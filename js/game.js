function word(){
  let keyword = document.getElementById("keyword").innerText
  let word = document.getElementById("word").value
  console.log(keyword)
  console.log(word)
  let last = keyword[keyword.length - 1]
  let first = word[0]
  if(last === first){
    document.getElementById("keyword").innerText = word
    document.getElementById("result").innerText = "정답!"
    document.getElementById("result").style.color = "green"
    document.getElementById("word").value = ""
  }else{
    document.getElementById("result").innerText = "땡!"
    document.getElementById("result").style.color = "red"
  }
}

let lotto = () => { 
  let num1 = Math.floor(Math.random()*44+1)
  let num2 = Math.floor(Math.random()*44+1)
  let num3 = Math.floor(Math.random()*44+1)
  let num4 = Math.floor(Math.random()*44+1)
  let num5 = Math.floor(Math.random()*44+1)
  let num6 = Math.floor(Math.random()*44+1)
  document.getElementById("n1").innerText = num1
  document.getElementById("n2").innerText = num2
  document.getElementById("n3").innerText = num3
  document.getElementById("n4").innerText = num4
  document.getElementById("n5").innerText = num5
  document.getElementById("n6").innerText = num6
}