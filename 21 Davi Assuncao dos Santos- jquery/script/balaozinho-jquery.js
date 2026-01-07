let $marcacaoAtual;
let $clicado;

$('.marcacao').mouseover((event) => {
    $clicado = $(event.currentTarget);
    $('#balaozinho').html(`<h2>${$clicado.data('titulo')}</h2><p>${$clicado.data('conteudo')}</p>`);
});

$('.marcacao').mouseout(() => $('#balaozinho').html(''));

$('.marcacao').mousemove((event) => {
    $('#balaozinho').css('left', `${event.pageX}px`);
    $('#balaozinho').css('top', `${event.pageY}px`);
});

$('.marcacao').click((event) => {
    $clicado = $(event.currentTarget);
    $marcacaoAtual = $clicado;
});

$('#marcacao-largura').change(() => {
    $marcacaoAtual.css('width', `${$('#marcacao-largura').val()}px`)
});

$('#marcacao-altura').change(() => {
    $marcacaoAtual.css('height', `${$('#marcacao-altura').val()}px`)
});

$('#marcacao-y').change(() => {
    $marcacaoAtual.css('top', `${$('#marcacao-y').val()}px`)
});

$('#marcacao-x').change(() => {
    $marcacaoAtual.css('left', `${$('#marcacao-x').val()}px`)
});