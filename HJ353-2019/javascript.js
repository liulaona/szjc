
// var button1 = document.getElementById('button1');
// var button2 = document.getElementById('button2');
// var button3 = document.getElementById('button3');

//计算示值误差 
//************************************************************
//************************************************************
function calculateError() {
    var sv0 = document.getElementById("s0").value;
    var sv1 = document.getElementById("s1").value;
    var sv2 = document.getElementById("s2").value;
    var sv3 = document.getElementById("s3").value;
    sv0 = parseFloat(sv0);
    sv1 = parseFloat(sv1);
    sv2 = parseFloat(sv2);
    sv3 = parseFloat(sv3);
    var average = (sv1 + sv2 + sv3) / 3;
    var error = ((average - sv0) / sv0) * 100;
    var szwc = error.toFixed(4);
    document.getElementById("szwc").innerHTML = szwc + "%";
}
//************************************************************
//************************************************************


//相对标准偏差的函数
//************************************************************
//************************************************************
function calculateRelativeStandardDeviation() {
    var cv1 = parseFloat(document.getElementById("c1").value);
    var cv2 = parseFloat(document.getElementById("c2").value);
    var cv3 = parseFloat(document.getElementById("c3").value);
    var cv4 = parseFloat(document.getElementById("c4").value);
    var cv5 = parseFloat(document.getElementById("c5").value);
    var cv6 = parseFloat(document.getElementById("c6").value);
    // var measurements = [cv1,cv2,cv3,cv4.cv5,cv6];竟然把逗号打成句号，fuck，找了半天错！！！
    var measurements = [cv1,cv2,cv3,cv4,cv5,cv6];

    var sum = measurements.reduce((a, b) => a + b, 0); 
    var mean = sum / 6; 
    var squaredDifferencesSum = measurements.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0);
    var relativeStdDev = Math.sqrt(squaredDifferencesSum / 5) / mean * 100;
    var cfx = relativeStdDev.toFixed(4); 
    document.getElementById("cfx").innerHTML = cfx + "%";
}

//************************************************************
//************************************************************

//24小时漂移
//************************************************************
//************************************************************
function calculateMaxRD(a, b) {
    var a = [];
    var b = parseFloat(document.getElementById("lcsx").value);
    var maxi = 0;
    for (let i = 1; i < 25; i++){
        a[i-1] = parseFloat(document.getElementById("p"+i).value);
        // console.log(a[i-1]) ;
    }
    const x0 = (a[0] + a[1] + a[2]) / 3;
    let maxRD = 0;
    for (let i = 3; i < a.length; i++) {
      const RD = ((a[i] - x0) / b) * 100;
      if (Math.abs(RD) > maxRD) {
        maxRD = Math.abs(RD);
        maxi = i;
      }
    }
    maxRD = ((a[maxi] - x0) / b) * 100;
    document.getElementById("pyi").innerHTML = maxRD + "%";
  }

//************************************************************
//************************************************************



// button1.addEventListener('click', calculateError);
window.onload = function() {
    var button1 = document.getElementById('button1');
    button1.addEventListener('click', calculateError);
    var button2 = document.getElementById('button2');
    button2.addEventListener('click', calculateRelativeStandardDeviation);
    var button3 = document.getElementById('button3');
    button3.addEventListener('click',  calculateMaxRD);
};
