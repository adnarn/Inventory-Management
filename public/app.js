document.getElementById("dataForm").addEventListener("submit", async function (event) {
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

        if (response.ok) {
            const data = await response.json();
            swal({
                title: "Success!",
                text: "Form saved successfully!",
                icon: "success",
            }).then(() => {
                window.location.reload();
            });
        } else {
            const errorText = await response.text();
            swal({
                title: "Error",
                text: `Error Submitting Form: ${errorText}`,
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
