document.getElementById("dataForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        sex: document.getElementById("sex").value,document.getElementById("dataForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        sex: document.getElementById("sex").value,
        dob: document.getElementById("dob").value,
        qualification: document.getElementById("qualification").value,
        rank: document.getElementById("rank").value,
        area_of_specialization: document.getElementById("area_of_specialization").value,
        teaching_subject: document.getElementById("teaching_subject").value,
        moe: document.getElementById("moe").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        duration: document.getElementById("duration").value,
        responsibilty: document.getElementById("responsibilty").value,
        lga: document.getElementById("lga").value,
        gl: document.getElementById("gl").value,
    };

    try {
        const response = await fetch("https://inventory-management-project-web.vercel.app/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        // Ensure the response is OK
        if (response.ok) {
            const data = await response.json(); // Parse JSON response
            swal({
                title: "Success!",
                text: "Form saved successfully!",
                icon: "success",
            }).then(() => {
                // Reload the page after the SweetAlert is closed
                window.location.reload();
            });
        } else {
            // Handle HTTP errors (non-2xx status codes)
            const errorText = await response.text(); // Read the error response as text
            swal({
                title: "Error",
                text: `Error Submitting Form: ${errorText}`,
                icon: "warning",
                dangerMode: true,
            });
        }
    } catch (error) {
        // Handle network or parsing errors
        swal({
            title: "Error",
            text: "Error Submitting Form",
            icon: "warning",
            dangerMode: true,
        });
        console.error('Error processing request:', error);
    }
});

        dob: document.getElementById("dob").value,
        qualification: document.getElementById("qualification").value,
        rank: document.getElementById("rank").value,
        area_of_specialization: document.getElementById("area_of_specialization").value,
        teaching_subject: document.getElementById("teaching_subject").value,
        moe: document.getElementById("moe").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        duration: document.getElementById("duration").value,
        responsibilty: document.getElementById("responsibilty").value,
        lga: document.getElementById("lga").value,
        gl: document.getElementById("gl").value,
    };

    try {
        const response = await fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            swal({
                title: "Success!",
                text: "Form saved successfully!",
                icon: "success",
            }).then(() => {
                // Reload the page after the SweetAlert is closed
                window.location.reload();
            });
        } else {
            const errorData = await response.json();
            swal({
                title: "Error",
                text: errorData.error || "Error Submitting Form",
                icon: "warning",
                dangerMode: true,
            });
        }
    } catch (error) {
        swal({
            title: "Error",
            text: "Error Submitting Form",
            icon: "warning",
            dangerMode: true,
        });
        console.error('Error processing request:', error);
    }
});
