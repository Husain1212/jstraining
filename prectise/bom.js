function windowOpen() {
            obj = window.open("", "myWindow", "width=200, height=100,top=200,left=100");
          }
          function myFunction() {
            window.open("https://www.w3schools.com", "_new");
          }

          function windowClose() {
            obj.close();
          }

           function windowClose() {
            window.close();
          }

          function printWindow() {
            window.print();
          }

          function windowMoveTo() {
            obj.moveTo(300, 400);
            obj.focus();
          }

          function windowMoveBy() {
            obj.moveBy(20, 20);
            obj.focus();
          }

          function windowLocation() {
            window.location.href = 'http://www.google.com';
          }