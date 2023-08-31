import $ from 'jquery';
export const showNavbarMenu = ()=>{
    let isCollapsed = $('.navbar-collapse').hasClass('show');

    // If the collapse is hidden, show it; otherwise, hide it
    if (!isCollapsed) {
        $('.navbar-collapse').addClass('show');
    } else {
        $('.navbar-collapse').removeClass('show');
    }
}
export const checkMinScreen = () =>{
    let width = $(document).width();
    let wrapper = $("#wrapper");
    return !!(width < 769 && wrapper.hasClass('sidebar-min'));
}
export const toggleHamburgerMenu = ()=>{
    let sidebar = $("#sidebar");
    return !sidebar.hasClass('navbar-show');
}
