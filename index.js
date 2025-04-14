function formatDate() {
    const dateInput = document.getElementById("dateInput").value;
    const format = document.getElementById("formatSelect").value;
    const output = document.getElementById("output");
    if (!dateInput) {
      // alert("error");
      output.textContent = "Please select a date.";
      return;
    }
    const date = new Date(dateInput);
    let formattedDate = "";

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    switch (format) {
      case "yyyy-mm-dd":
        formattedDate = `${year}-${month}-${day}`;
        break;
      case "dd/mm/yyyy":
        formattedDate = `${day}/${month}/${year}`;
        break;
      case "mm-dd-yyyy":
        formattedDate = `${month}-${day}-${year}`;
        break;
      case "full":
        formattedDate = date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        break;
      default:
        formattedDate = "Invalid format";
    }
    
    output.textContent = `Formatted Date: ${formattedDate}`;
   }