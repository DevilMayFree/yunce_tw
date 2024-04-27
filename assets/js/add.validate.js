$.validator.addMethod("psw",function(value,element){
         return this.optional(element) || /^(?=.*\d)(?=.*[a-z|A-Z]).{8,}$/.test(value);
     },"Passwords are 8 characters with letters, and at least one number.");
