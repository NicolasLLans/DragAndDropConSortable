const lista = document.getElementById('lista');

Sortable.create(lista,{
      animation: 150,
      chosenClass:"seleccionado",
      //ghostClass:"fantasma",
      dragClass:"drag",
});