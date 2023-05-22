var data = `صناديق الاستثمار العقارية المتداولة الصادرة من هيئة سوق المالية. الصندوق يعمل وفقا لأنظمة صناديق الأستثمار العقارى, وتعليمات بشكل ربعى بما صناديق الاستثمار العقارية المتداولة الصادرة من هيئة سوق المالية. الصندوق يعمل وفقا لأنظمة صناديق الأستثمار العقارى, وتعليمات بشكل ربعى بما صناديق الاستثمار العقارية المتداولة الصادرة من هيئة سوق المالية. الصندوق يعمل وفقا لأنظمة صناديق الأستثمار العقارى, وتعليمات بشكل ربعى بما صناديق الاستثمار العقارية المتداولة الصادرة من هيئة سوق المالية. الصندوق يعمل وفقا لأنظمة صناديق الأستثمار العقارى, وتعليمات بشكل ربعى بما صناديق الاستثمار العقارية المتداولة الصادرة من هيئة سوق المالية. الصندوق يعمل وفقا لأنظمة صناديق الأستثمار العقارى, وتعليمات بشكل ربعى بما`

var cardData = [
    { id: 1, logo: "1.png", title: "الأفضل مشورة", content: "باليضافة إلى اسقلالينا في حراية, فقد طورنا العديد من الاليات الحصرية اللي تساعد المستتمر على تخوين محافظ متنوعة وعلى انتقاء المنتجات الأفضل" },
    { id: 2, logo: "2.png", title: "الأكثر راحة", content: "لن تحتاج إلى قنح حسابات متعددة؛ أو حفظ أسماء دخول مختلفة لأن درايف تتيح لك الاستتصار في كافة المنتجات الاستتمارية من مكان واحد, عبر موقع واحد وحساب واحد" },
    { id: 3, logo: "3.png", title: "الأكثر تنويعاً", content: "تمكتك دراية من الاستتصار في أكثر من 60 منتج اسنتماري من 10 مدراء مختلفين. هذه المنتجات تستعر في كافة الفتات الاستعارية" },
    { id: 4, logo: "4.png", title: "وبلا تكلفة إضافية", content: "كافة المنتجات الاستتمارية متاحة بلمس التكلفة. المتاحة عند الاستمار مع الجهة الاستثمارية متاحة بنفس التكلفةمباشرة أي بدون أي رسوم كافة المنتجات الاستتصارية مباشرة أي بدون أي رسوم إضافية." },
    { id: 5, logo: "5.png", title: "الأكثر شفافية", content: "أصبح من السهل عليك الصقارة بين المنتجات.  الي تقدمها دراية من خلال حساب موحد لشكل عليكين لمنتجات شفاف لالتقاء الأفضل من بينها شقاف لانتقاء الافضل من ينها أصح من السهل..." },
    { id: 6, logo: "6.png", title: "الأكثر استقلالية", content: "دراية تركر على جمع كافة المنتجات الاستلصارية نحت سقف واحد بدلا من الاركبز على بيع منتجات بعينها. الامر الذي يعطيها قدر أكبر هن الاستقلالية والحبادية في تعاملها ومشورتها." }
]

window.onload = function () {

    var count = 300
    var result = data.slice(0, count) + (data.length > count ? "..." : "");
    document.getElementsByClassName("paragraph")[0].innerText = result;

    for (let i = 0; i < cardData.length; i++) {
        var div1 = document.createElement("div");
        div1.classList.add("col-md-4", "g-4");
        var div = document.createElement(`div`);
        div.classList.add("custom-card-2", "shadow", "rounded-4", "bg-white", "p-4", "text-bg-light", "mb-4", `div${i}`, "h-100");

        var cardImage = document.createElement("img");
        cardImage.classList.add("img-fluid", "rounded-top");
        cardImage.src = `./assets/images/${cardData[i].logo}`;

        var h1 = document.createElement(`h1`);
        h1.classList.add("my-3");
        h1.innerText = cardData[i].title;

        var p = document.createElement(`p`);
        p.setAttribute("id", `paragraph-${i}`)

        var pCount = 120;
        var boolean = cardData[i].content.length > pCount
        var pResult = cardData[i].content.slice(0, pCount) + (boolean ? "..." : "");
        p.innerText = pResult;

        div1.append(div);
        document.getElementById("cards").append(div1);
        document.getElementsByClassName(`div${i}`)[0].append(cardImage, h1, p);

        if (boolean) {
            var readMoreBtn = document.createElement("button");
            readMoreBtn.className = `purple-bg text-white px-4 py-1 mt-5 rounded-3`;
            readMoreBtn.innerText = "اقرا المزيد";
            readMoreBtn.addEventListener("click", function () {
                openModal(cardData[i].title, cardData[i].content);
            })
            document.getElementsByClassName(`div${i}`)[0].append(readMoreBtn);
        }

    }

    var div2 = document.createElement("div");
    div2.classList.add("site-modal");
    div2.innerHTML = `
    <div class="modal-content">
        <h1 class="my-2" id="myTitle">
        </h1>
        <p id="myText">
        </p>
        <button class="purple-bg text-white px-4 py-1 mt-5 rounded-3 mx-auto" onclick="closeModal()" style="width: fit-content;">
            close
        </button>
    </div>`
    document.body.append(div2)
    document.getElementsByClassName("site-modal")[0].style.display = "none";
}

function toggleColor() {
    var foundColor = document.querySelectorAll(".purple-bg , .green-bg");
    for (let index = 0; index < foundColor.length; index++) {
        foundColor[index].classList.toggle("purple-bg");
        foundColor[index].classList.toggle("green-bg");
    }
}

function closeModal() {
    document.getElementsByClassName("site-modal")[0].style.display = "none";
    document.body.style.overflow = "auto";

}

function openModal(header, para) {
    document.getElementById("myTitle").innerText = header;
    document.getElementById("myText").innerText = para;
    document.getElementsByClassName("site-modal")[0].style.display = "block";
    document.body.style.overflow = "hidden";
}


