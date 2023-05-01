$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Developer", "IITian", "Student", "Dancer","Kaggler"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "IITian", "Student", "Dancer","Kaggler"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            
        }
    });
    // skills chart script
    var ctx = document.getElementById('skills-chart').getContext('2d');
    var skillsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['HTML','CSS','Javascript','React','Node.JS','Flutter','APIs','Java','Kotlin','Firebase', 'Supervised&Unsupervised ML','Kernels','Boosting','Trees','Neural Networks','Heuristics Game-AI','Transformers','Stable Diffusion','Reinforcement Learning','MySQL','MongoDB','Firestore','phpMyAdmin','C/C++','Python','WIPS','WiFi-6','WiFi-7'],
            datasets: [{
                label: 'Skills',
                data: [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
                backgroundColor: [
                    'rgba(166, 140, 20, 0.8)',
                    'rgba(166, 110, 20, 0.8)',
                    'rgba(166, 80, 20, 0.8)',
                    'rgba(166, 50, 20, 0.8)',
                    'rgba(166, 100, 20, 0.8)',
                    'rgba(166, 130, 20, 0.8)',
                    'rgba(166, 160, 20, 0.8)',
                    'rgba(166, 180, 20, 0.8)',
                    'rgba(166, 200, 20, 0.8)',
                    'rgba(166, 200, 50, 0.8)',
                    'rgba(0, 166, 20, 0.8)',
                    'rgba(20, 166, 0, 0.8)',
                    'rgba(40, 166, 60, 0.8)',
                    'rgba(60, 166, 80, 0.8)',
                    'rgba(80, 166, 100, 0.8)',
                    'rgba(100, 166, 120, 0.8)',
                    'rgba(120, 166, 140, 0.8)',
                    'rgba(140, 166, 160, 0.8)',
                    'rgba(160, 166, 180, 0.8)',
                    'rgba(80, 80, 80, 0.8)',
                    'rgba(70, 70, 70, 0.8)',
                    'rgba(60, 60, 60, 0.8)',
                    'rgba(50, 50, 50, 0.8)',
                    'rgba(40, 40, 40, 0.8)',
                    'rgba(30, 30, 30, 0.8)',
                    'rgba(0, 50, 240, 0.8)',
                    'rgba(0, 110, 230, 0.8)',
                    'rgba(0, 166, 220, 0.8)',

                ],
                borderWidth:0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 10,
                }
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return data.labels[tooltipItem.index] + ': ' + data.datasets[0].data[tooltipItem.index] + '%';
                    }
                }
            }
        }
    });
});