let total = $(".text-display span");
movies.forEach(movie => {
    $(".table tbody").append(`
    <tr data-genre="${movie.genre}">
        <td>${movie.title}</td>
        <td>${movie.genre}</td>
        <td>${movie.stock}</td>
        <td>${movie.ratings}</td>
        <td onclick="deleteMe(this)"><i class="fas fa-trash"></i></td>
        <td><i class="fas fa-download"></i></td>
    </tr>
    `)
})
total.text(movies.length);

$('li').click(function () {
    $(this).siblings().removeClass("active")
    $(this).addClass('active');
    let genre = $(this).data("genre");
    if (genre == "all") {
        $("tbody tr").removeClass("hide")
        total.text($("tbody tr").length)
        return;
    }
    let filteredMovies = [...$("tbody tr")].filter(el => $(el).data("genre") == genre)
    total.text(filteredMovies.length)
    $("tbody tr").each((i, el) => {
        if ($(el).data("genre") == genre) {
            $(el).removeClass('hide');

        } else {
            $(el).addClass('hide');
        }
    })
})

function deleteMe(me) {
    let toDelete = $(me).parents('tr');
    toDelete.remove();
    let count = total.text();
    count--;
    total.text(count);
}
