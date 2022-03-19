var listaFilmes = [
  "https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4QAGCsMifTonQDF1qc7tkRV_5DtPzZWb74SKfG4QWiIWCAuBcdmaJ_u_rdieOsZwsk4&usqp=CAU",
  "https://disneyplusbrasil.com.br/wp-content/uploads/2021/03/Venom-2-Poster-Nao-Oficial-843x1024.jpg"
];

for (i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}