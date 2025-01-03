import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'filled-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-radiobutton [(ngModel)]="checked" variant="filled" />
        </div>
        <app-code [code]="code" selector="radio-button-filled-demo"></app-code>
    `
})
export class FilledDoc {
    checked: boolean = false;

    code: Code = {
        basic: `<p-radiobutton [(ngModel)]="checked" variant="filled" />`,

        html: `<div class="card flex justify-center">
    <p-radiobutton [(ngModel)]="checked" variant="filled" />
</div>`,

        typescript: `import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-filled-demo',
    templateUrl: './radio-button-filled-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonFilledDemo {
    checked: boolean = false;
}`
    };
}
