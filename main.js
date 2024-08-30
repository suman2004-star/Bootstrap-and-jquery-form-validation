$(document).ready(function() {
    // Initialize the datepicker
    $("#dob").datepicker();

    // Handle form submission
    $("#form").submit(function(e) {
        e.preventDefault();

        // Clear previous errors and borders
        $(".error").text("");
        $(".form-control").css("border", "1px solid #ced4da");

        // Get form field values
        let Firstname = $("#firstName").val().trim(); 
        let Lastname = $("#lastName").val().trim();
        let email = $("#email").val().trim();
        let Address = $("#address").val().trim();
        let dateofbirth = $("#dob").val().trim();
        let pincode = $("#pincode").val().trim();
        let phone = $("#phone").val().trim();

        let formIsValid = true;

        // Validate First Name
        if (Firstname === "") {
            $("#First-Name-error").text("First name is required");
            formIsValid = false;
            $("#firstName").css("border", "2px solid red");
        }

        // Validate Last Name
        if (Lastname === "") {
            $("#last-Name-error").text("Last name is required");
            formIsValid = false;
            $("#lastName").css("border", "2px solid red");
        }

        // Validate Email
        if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $("#email-error").text("Please enter a valid email");
            formIsValid = false;
            $("#email").css("border", "2px solid red");
        }

        // Validate Address
        if (Address === "") {
            $("#address-error").text("Address is required");
            formIsValid = false;
            $("#address").css("border", "2px solid red");
        }

        // Validate Date of Birth
        if (dateofbirth === "") {
            $("#date-error").text("Date of birth is required");
            formIsValid = false;
            $("#dob").css("border", "2px solid red");
        }

        // Validate Pincode
        if (pincode === "" || pincode.length < 6) {
            $("#pincode-error").text("Please enter a valid pincode");
            formIsValid = false;
            $("#pincode").css("border", "2px solid red");
        }

        // Validate Phone Number
        if (phone === "" || phone.length < 10) {
            $("#phone-error").text("Please enter a valid phone number");
            formIsValid = false;
            $("#phone").css("border", "2px solid red");
        }

        // If form is valid submit the form
        if (formIsValid) {
            alert("Congratulations! Your form has been submitted.");
            $("#form")[0].reset(); // Clear all input fields
        }
    });

    // State and District Dropdown Logic
    const states = [
        { name: "West Bengal", districts: ["Howrah", "Kolkata", "Mednipur"] },
        { name: "Maharashtra", districts: ["Mumbai", "Pune", "Nagpur"] },
        { name: "Karnataka", districts: ["Bengaluru", "Mysuru", "Mangaluru"] }
    ];

    const $stateDropdown = $("#state");
    const $districtDropdown = $("#district");

    // Populate state dropdown
    $.each(states, function(index, state) {
        $stateDropdown.append($("<option>").val(state.name).text(state.name));
    });

    // Handle state dropdown change
    $("#state").change(function() {
        const selectedState = $(this).val();

        // Clear previous district options
        $districtDropdown.empty().append($("<option>").val("").text("Select District"));

        // Find the corresponding state object
        // const state = states.find(s => s.name === selectedState);
        const state = $.map(states,function(state,index) {
              if(state.name === selectedState) {
                return state
              }
        })[0]

        // Populate district dropdown if a state is selected
        if (state) {
            $.each(state.districts, function(index, district) {
                $districtDropdown.append($("<option>").val(district).text(district));
            });
        }
    });
});
