$(document).ready(function () {
    $("#toggle").click(function () {
        let x = Math.floor(Math.random() * 10);
        if (x == 0) {
            document.getElementById("wiki").innerHTML = "I love collecting and reading books. I have over 200 books.";
            document.getElementById("image").src = "images1/books.png";
        } else if (x == 1) {
            document.getElementById("wiki").innerHTML = "I love working out!!";
            document.getElementById("image").src = "images1/gym.jpg";
        } else if (x == 2) {
            document.getElementById("wiki").innerHTML = "Trying out weird filters are fun!!";
            document.getElementById("image").src = "images1/weird.png";
        } else if (x == 3) {
            document.getElementById("wiki").innerHTML = "I have an elder sister, and we both look very alike";
            document.getElementById("image").src = "images1/sis.jpg";
        } else if (x == 4) {
            document.getElementById("wiki").innerHTML = "I enjoy taking late night walks";
            document.getElementById("image").src = "images1/night.png";
        } else if (x == 5) {
            document.getElementById("wiki").innerHTML = "My best friend's name is Ashritha";
            document.getElementById("image").src = "images1/bestfriend.png";
        } else if (x == 6) {
            document.getElementById("wiki").innerHTML = "I have a very small group of only three friends!";
            document.getElementById("image").src = "images1/group_of_3.png";
        } else if (x == 7) {
            document.getElementById("wiki").innerHTML = "I like travelling.";
            document.getElementById("image").src = "images1/travel.jpg";
        } else if (x == 8) {
            document.getElementById("wiki").innerHTML = "Wanna find me? Search for the nearest flowers.";
            document.getElementById("image").src = "images1/flowers.png";
        } else {
            document.getElementById("wiki").innerHTML = "Tea has my heart!!";
            document.getElementById("image").src = "images1/tea.png";
        }

    });


    $(".skills").hover(function () {
        $(this).css({
            "transform": "translateY(-10px)",
            "border-color": "#f00",
            "transition": "transform 0.5s ease",
            " border-color": "0.5s ease",
            "cursor": "pointer",
        });
    },
        function () {
            $(this).css({
                "transform": "translateY(0)",
                "border-color": "#000"
            });
        }
    );

    $(".super .grid").hover(function () {
        $(this).css({
            "transform": "scale(1.1)",
            "border-color": "#f00",
            "transition": "transform 0.5s ease",
            " border-color": "0.5s ease",
            "cursor": "pointer",
        });
    },
        function () {
            $(this).css({
                "transform": "translateY(0)",
                "border-color": "#000"
            });

        }


    );
    $(".hamburger").click(function () {
        $('.nav-links').toggleClass('active');
    });

    $("#abc").hover(function () {
        $(this).attr("src", "images1/Cofffe1.png");
    }
        , function () {
            $(this).attr("src", "images1/Cofffe2.png");
        });

    $("#def").hover(function () {
        $(this).attr("src", "images1/hair2.png");
    }
        , function () {
            $(this).attr("src", "images1/hair1.png")
});

$("#drip").click(function () {
    $("#mm").attr("src", "https://i.pinimg.com/564x/85/00/c1/8500c188978d05d0b87528dd16f211bb.jpg").css({ width: "300px", height: "auto" });
    $("#comment").text("Seriously only $1");
});
$("#esp").click(function () {
    $("#mm").attr("src", "https://i.pinimg.com/564x/82/54/7c/82547cc2ea934d5303d9cdec412cd895.jpg").css({ width: "300px", height: "auto" });
    $("#comment").text("Okay , but can do better than $4");
});
$("#lat").click(function () {
    $("#mm").attr("src", "https://i.pinimg.com/564x/d0/ad/03/d0ad032c3501f8dc93a5cc695beeb5ea.jpg").css({ width: "300px", height: "auto" });
    $("#comment").text("Okayyy, now we talking with $6!!");
});
$("#cap").click(function () {
    $("#mm").attr("src", "https://i.pinimg.com/564x/67/d7/fe/67d7fe4f22afd0317c627066095a802f.jpg").css({ width: "300px", height: "auto" });
    $("#comment").text("Dayymmmm, I am rich!!");
});


// Open popup
$("#openPopup").click(function () {
    $("#popup").fadeIn();
});

// Close popup
$(".close").click(function () {
    $("#popup").fadeOut();
});

// Close popup if user clicks outside of the popup content
$(window).click(function (event) {
    if ($(event.target).is("#popup")) {
        $("#popup").fadeOut();
    }
});

});
