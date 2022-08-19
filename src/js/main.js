const startMarquee = () => {
    $('.marquee_text').marquee({
        direction: 'left',
        duration: 10000,
        gap: 6,
        delayBeforeStart: 0,
        megalicated: true,
        startVisible: true
    })
}
const customerSelect = () => {
    $('select').niceSelect();
}
const searchBox = () => {
    $('.close-box').on('click', function () {
        $('.search-container ').slideUp()
        $('.wrap-header-right .wrap-search').fadeIn()
    })
    $('.search-button ').on('click', function () {
        $('.search-container ').slideToggle()
        $('.wrap-header-right .wrap-search').fadeOut()
    })
}
const datePicker = () => {
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('input[name="datePicker"]').val(start.format('L') + ' - ' + end.format('L'));
    }
    $('input[name="datePicker"]').daterangepicker({
        "parentEl": ".input-daterange",
        startDate: start,
        endDate: end,
        "locale": {
            "applyLabel": "Áp dụng",
            "cancelLabel": "Hủy",
        },
    }, cb);
    $('input[name="date"]').daterangepicker({
        singleDatePicker: true,
        startDate: moment(),
        autoApply: true
    });
    cb(start, end)
}
const handleClickSlide = () => {
    var handleClick = $('.history-list .history-list_header')
    var notification = $('header').find('.notification')
    handleClick.on('click', () => {
        handleClick.toggleClass('active')
        handleClick.parent().find('.list-history').slideToggle()
    })
    notification.on('click', () => {
        $('header').find('.notification-wrapper').slideToggle()
        $('#overlay').toggleClass('active')
    })
    $('#overlay').on('click', () => {
        $('#overlay').removeClass('active')
        $('header').find('.notification-wrapper').slideUp()
    })

}
const tabsPanel = () => {
    var theTabs = $('.nav-tabs li')
    var i

    function theTabClicks(tabClickEvent) {
        var clickedTab = tabClickEvent.currentTarget
        var tabParent = tabClickEvent.currentTarget.parentNode.parentNode.parentNode
        var theTabs = tabParent.querySelectorAll('.nav-tabs li')
        for (var i = 0; i < theTabs.length; i++) {
            theTabs[i].classList.remove('active')
        }

        clickedTab.classList.add('active')
        tabClickEvent.preventDefault()
        var contentPanes = tabParent.querySelectorAll('.panel')
        for (i = 0; i < contentPanes.length; i++) {
            contentPanes[i].classList.remove('active')
        }
        var anchorReference = tabClickEvent.target
        var activePaneId = anchorReference.getAttribute('href')
        var activePane = tabParent.querySelector(activePaneId)
        activePane.classList.add('active')
    }
    for (i = 0; i < theTabs.length; i++) {
        theTabs[i].addEventListener('click', theTabClicks)
    }
}
const myChart = () => {
    if ($('#myChart1').length >= 1 && $('#myChart2').length >= 1) {
        new Chart('myChart1', {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [18, 64, 18],
                    backgroundColor: ['#EB2629', '#FF993B', '#FFC20E']
                }]
            },
            options: {
                cutout: 70,
                hoverOffset: 0,
                borderWidth: 0
            }
        })
        new Chart('myChart2', {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: 'My First Dataset',
                    data: [18, 41, 41],
                    backgroundColor: ['#7DBA00', '#EB2629', '#FFC20E']
                }]
            },
            options: {
                cutout: 70,
                hoverOffset: 0,
                borderWidth: 0
            }
        })
    }
}
$(document).ready(function () {
    startMarquee();
    customerSelect();
    searchBox();
    datePicker();
    handleClickSlide();
    tabsPanel();
    myChart();
    $('[data-fancybox]').fancybox({
        clickSlide: false,
        clickOutside: false
    })
})