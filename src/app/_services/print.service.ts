import { Router, ActivatedRoute } from '@angular/router';

export class PrintService {
    isPrinting = false;
  
    constructor(private router: Router) { }
  
    printDocument(documentName: string, documentData: string[]) {
      this.isPrinting = true;
      this.router.navigate(['/',
        { outlets: {
          'print': ['print', documentName, documentData.join()]
        }}]);
    }
  
    onDataReady() {
      setTimeout(() => {
        window.print();
        this.isPrinting = false;
        this.router.navigate([{ outlets: { print: null }}]);
      });
    }
  }