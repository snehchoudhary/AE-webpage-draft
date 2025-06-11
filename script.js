
// TypeWriter effect
const text = "Total Pipeline Integrity Management Solutions (T-PIMS)";
const speed = 150;
let i = 0;
function typeWriter(){
    if(i<text.length){
        document.getElementById("typeWriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();

// auto-type effect
var typed = new Typed(".auto-type", {
    strings: ["User Management", "Asset Master", "CP Module", "ILI Module", "GIS Integration", "Risk Management", "Activity Scheduler"],
    typeSpeed: 150,
    backSpeed: 150,
    looped: true
})
