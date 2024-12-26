var grades = [];

// Update the scores in the textarea and reset inputs
var update_scores = function () {
    var val = get_item_list(grades);
    document.getElementById("scores").value = val; // Display all scores
    document.getElementById("student_name").value = ""; // Clear name field
    document.getElementById("score").value = ""; // Clear score field
    document.getElementById("student_name").focus(); // Focus on name field
};

// Add a student name and score
var student_grade_add_click = function () {
    var studentName = document.getElementById("student_name").value.trim();
    var score = parseFloat(document.getElementById("score").value);

    if (studentName === "" || isNaN(score)) {
        alert("Please enter a valid student name and numeric score.");
        return;
    }

    grades.push([studentName, score]); // Add to grades array
    update_scores(); // Update display
    document.getElementById("average_score").value = getAverageScore(grades).toFixed(2); // Calculate average
};

// Generate a string of student names and scores
var get_item_list = function (item_list) {
    if (item_list.length === 0) {
        return "";
    }
    var list = "";
    for (var i = 0; i < item_list.length; i++) {
        list += item_list[i][0] + ": " + item_list[i][1] + "\n";
    }
    return list;
};

// Calculate the average score
function getAverageScore(grades) {
    var numberOfStudents = grades.length;
    var sum = 0;
    if (numberOfStudents > 0) {
        for (var i = 0; i < numberOfStudents; i++) {
            sum += grades[i][1];
        }
        return sum / numberOfStudents;
    }
    return 0;
}

// Clear the form and reset scores
function clear_click() {
    document.getElementById("scores").value = "";
    document.getElementById("average_score").value = "";
    grades = []; // Clear the grades array
    document.getElementById("student_name").focus(); // Focus on the name field
}

// Sort the students by their names
var sort_click = function () {
    grades.sort(function (a, b) {
        return a[0].localeCompare(b[0]); // Compare names alphabetically
    });
    update_scores(); // Update display
};

// Initialize event listeners
window.onload = function () {
    document.getElementById("add_button").onclick = student_grade_add_click;
    document.getElementById("sort_button").onclick = sort_click;
    document.getElementById("clear").onclick = clear_click;
    document.getElementById("student_name").focus();
};
        