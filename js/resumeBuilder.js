/*
This is empty on purpose! Your code to build the resume will go here.
 */

var myContacts = {
        "mobile":"+91-974-150-0357",
        "email":"jana.dhana@outlook.com",
        "gitHub":"JanardhanR",
        "location":"Bengaluru"
}

var bio = {
        "name":"Janardhan Ramachandra",
        "role":"Web Developer",
        "contacts" : myContacts,
         "picture":"images/me.jpg",
        "skills" : ['C/C++','C#.Net','WPF','HTML5 / CSS / JS' , "Python"]
   };


//name and role
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//profile contacts
var mobile =  HTMLmobile.replace("%data%",bio.contacts.mobile);
var email = HTMLemail.replace("%data%",bio.contacts.email);
var gitHub = HTMLgithub.replace("%data%",bio.contacts.gitHub);
var myLoc = HTMLlocation.replace("%data%",bio.contacts.location);
$('#topContacts').append(mobile);
$('#topContacts').append(email);
$('#topContacts').append(gitHub);
$('#topContacts').append(myLoc);
//footer contacts
$('#footerContacts').append(mobile);
$('#footerContacts').append(email);
$('#footerContacts').append(gitHub);
$('#footerContacts').append(myLoc);
//my picture
var bioPic = HTMLbioPic.replace("%data%",bio.picture);
$("#header").append(bioPic);
var welcome = HTMLwelcomeMsg.replace("%data%"," ")
$("#header").append(welcome)
$("#header").append(HTMLskillsStart);

var skillsToKill = "";
for (var i = 0; i < bio.skills.length; i++) {
    skillsToKill += bio.skills[i];
    skillsToKill += '\n';
}
skillsToKill = HTMLskills.replace("%data%",skillsToKill);
$("#skills").append(skillsToKill);

//Work experience
var work = {
    "jobs":[
        {
        "position":"Project Engineer",
        "employer":"Wipro",
        "dates":"2006-2010",
        "location":"Chennai",
        "description":"Worked with Target corporation on Point of Sale application",
        },
        {
        "position":"Senior Engineer",
        "employer":"HCL",
         "dates":"2010-2010",
        "location":"Chennai",
        "description":"Worked with Deustche Bank on Kredit Manager application",
        },
        {
        "position":"TechLead",
        "employer":"Honeywell",
         "dates":"2011-till date",
        "location":"Bangalore",
        "description":"Working in Honeywell Process control system application"
        }
    ]
}

var projects =
{
    projectInfo :[
        {
        "title":"Guest Service Team Lead",
        "dates":"2008-2009",
        "description":"Created a mechanism to publish all the events in the point of sale transaction"+
        " using a observer pattern",
        "images":"images/myproject.png"
        },
        {
        "title":"Kredit Manager",
        "dates":"2010-2010",
        "description":"Created the print functionality for printing the credit processing",
        "images":"images/myproject.png"
        },
        {
        "title":"Experion Control Integration",
        "dates":"2011-2012",
        "description":"Integrates various process control systems like Experion with Safety Manager and Process Machinery and Drives",
        "images":"images/myproject.png"
        },
        {
        "title":"Experion Search Enhancements",
        "dates":"2012-2016",
        "description":"Provides ability to search cross references across various Experion integrated control systems",
        "images":"images/myproject.png"
        }]
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[i].employer)+
            HTMLworkTitle.replace("%data%",work.jobs[i].position));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[i].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[i].description));
    }
}
work.display();


projects.display = function (){
    for (var i = 0; i < projects.projectInfo.length ; i++)
    {
        $("#projects").append(HTMLprojectStart);
        $("#projects").append(HTMLprojectTitle.replace("%data%",projects.projectInfo[i].title));
        $("#projects").append(HTMLprojectDates.replace("%data%",projects.projectInfo[i].dates));
        $("#projects").append(HTMLprojectDescription.replace("%data%",projects.projectInfo[i].description));
        $("#projects").append(HTMLprojectImage.replace("%data%",projects.projectInfo[i].images));
    }
};
projects.display();

//School information
var school = {
    "name":"St.Thomas School",
    "location":"Bengaluru",
    "degree":"Secondary School",
    "Majors":"",
    "dates":1996
}
var collegePU = {
    "name":"Reddy Jana Sangha PU College",
    "location":"Koramangala, Bengaluru",
    "degree":"Pre University",
    "Majors":"Physics, Chemistry, Mathematics, Biology",
    "dates":2000
}

var degreeEdu = {
    "name":"Rural Engineering College",
    "location":"Bhalki, Karnataka",
    "degree":"Bachelor of Engineering",
    "Majors":"Electronics and Communication",
    "dates":2004
}

var fsWD = {
    "title":"Full Stack Web Developer Nanodegree",
    "school":"Udacity",
    "dates":"2017",
    "url":"https://in.udacity.com/course/full-stack-web-developer-nanodegree--nd004/"
}
var education = {
    "schools":[school,collegePU,degreeEdu],
    "onlineCourses":[fsWD],
};

// var HTMLschoolStart = '<div class="education-entry"></div>';
// var HTMLschoolName = '<a href="#">%data%';
// var HTMLschoolDegree = ' -- %data%</a>';
// var HTMLschoolDates = '<div class="date-text">%data%</div>';
// var HTMLschoolLocation = '<div class="location-text">%data%</div>';
// var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';


education.display = function (){
    for (var i = 0; i < education.schools.length ; i++)
    {
        $("#education").append(HTMLschoolStart);
        $("#education").append(HTMLschoolName.replace("%data%",education.schools[i].name));
        $("#education").append(HTMLschoolDegree.replace("%data%",education.schools[i].degree));
        $("#education").append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
        $("#education").append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
        if(education.schools[i].Majors != ""){
            $("#education").append(HTMLschoolMajor.replace("%data%",education.schools[i].Majors));
        }
    }
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length ; i++)
    {
        $("#education").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title));
        $("#education").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school));
        $("#education").append(HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates));
        $("#education").append(HTMLonlineURL.replace("%data%",education.onlineCourses[i].url));
    }

};
education.display();//my locations
$("#mapDiv").append(googleMap);








//miscellaneous
//$("#header").prepend(internationalizeButton) ;

$(document).click(function fun(loc){
logClicks(loc.x,loc.y);
});

function inName(textToUse)
{
    var inNameToUse = textToUse.split(' ');
    var firstName = inNameToUse[0].toLowerCase()
                          .slice(0,1).toUpperCase() +
                          inNameToUse[0].toLowerCase().slice(1);

    return firstName.concat(' ')
                    .concat(inNameToUse[1].toUpperCase());
}


