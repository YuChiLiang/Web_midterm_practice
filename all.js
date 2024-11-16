$(document).ready(function () {
    $(".click").click(function (e) { 
        e.preventDefault();
        $(".click").toggleClass("active");
        $(this).next(".show-content").toggleClass("active");// 點擊元素顯示對應元素（顯示下一個兄弟元素）
        // toggleClass 不用.
    });
});