(function () {
    var r = document.documentElement, b = document.getElementById('theme');
    b.onclick = function () { var d = r.getAttribute('data-theme') === 'dark' || (!r.getAttribute('data-theme') && matchMedia('(prefers-color-scheme:dark)').matches); r.setAttribute('data-theme', d ? 'light' : 'dark') };
})();

(function () {
    var d = document.getElementById('lb'), i = document.getElementById('lbi');
    document.querySelectorAll('.cthumb').forEach(function (b) { b.addEventListener('click', function () { var m = b.querySelector('img'); i.src = m.src; i.alt = m.alt; d.showModal(); }); });
    document.getElementById('lbx').addEventListener('click', function () { d.close(); });
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
})();
