let emails = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];

if (!Array.isArray(emails)) {
    console.log("Đây không phải là mảng");
} else if (emails.length === 0) {
    console.log("Mảng không có phần tử");
} else {
    let validEmails = emails.filter(email => email.includes('@') && !email.includes(' '));
    console.log(validEmails);
}
