import {
  CommonModule,
  init_common
} from "./chunk-MI63EHBC.js";
import {
  Component,
  Directive,
  ElementRef,
  Input,
  NgZone,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  inject
} from "./chunk-NONR5GBI.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\shared\ui\table\table-shell.component.html
var table_shell_component_default;
var init_table_shell_component = __esm({
  "angular:jit:template:src\\app\\shared\\ui\\table\\table-shell.component.html"() {
    table_shell_component_default = `<div class="cis-table-surface rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
  <div *ngIf="title || subtitle" class="flex flex-wrap items-start justify-between gap-3">\r
    <div>\r
      <div *ngIf="title" class="text-base font-semibold text-slate-900">{{ title }}</div>\r
      <div *ngIf="subtitle" class="mt-1 text-xs text-slate-500">{{ subtitle }}</div>\r
    </div>\r
    <ng-content select="[actions]" />\r
  </div>\r
\r
  <div class="cis-table-content" [ngClass]="(title || subtitle) ? 'mt-3' : ''">\r
    <ng-container *ngIf="!empty; else emptyState">\r
      <ng-content />\r
    </ng-container>\r
    <ng-template #emptyState>\r
      <div class="rounded-xl bg-slate-50 p-4 text-sm text-slate-600 ring-1 ring-slate-100">{{ emptyMessage }}</div>\r
    </ng-template>\r
  </div>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\shared\ui\table\table-shell.component.scss
var table_shell_component_default2;
var init_table_shell_component2 = __esm({
  "angular:jit:style:src\\app\\shared\\ui\\table\\table-shell.component.scss"() {
    table_shell_component_default2 = "/* src/app/shared/ui/table/table-shell.component.scss */\n:host,\n.cis-table-surface {\n  display: block;\n  min-width: 0;\n}\n.cis-table-content {\n  overflow-x: auto;\n}\n@media (max-width: 767px) {\n  .cis-table-surface {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=table-shell.component.css.map */\n";
  }
});

// src/app/shared/ui/table/table-shell.component.ts
var ResponsiveTablesDirective, TableShellComponent;
var init_table_shell_component3 = __esm({
  "src/app/shared/ui/table/table-shell.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_table_shell_component();
    init_table_shell_component2();
    init_common();
    init_core();
    ResponsiveTablesDirective = class ResponsiveTablesDirective2 {
      element = inject(ElementRef);
      zone = inject(NgZone);
      observer;
      ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
          this.refresh();
          if (typeof MutationObserver === "undefined")
            return;
          this.observer = new MutationObserver(() => this.refresh());
          this.observer.observe(this.element.nativeElement, { childList: true, characterData: true, subtree: true });
        });
      }
      ngOnDestroy() {
        this.observer?.disconnect();
      }
      refresh() {
        for (const table of Array.from(this.element.nativeElement.querySelectorAll("table"))) {
          const header = table.tHead?.rows.item(0);
          if (!header)
            continue;
          table.classList.add("cis-responsive-table");
          table.setAttribute("role", "table");
          table.tHead.setAttribute("role", "rowgroup");
          header.setAttribute("role", "row");
          const labels = Array.from(header.cells).flatMap((cell) => {
            cell.setAttribute("role", "columnheader");
            cell.setAttribute("scope", "col");
            return Array(cell.colSpan).fill(cell.textContent?.trim() ?? "");
          });
          for (const body of Array.from(table.tBodies)) {
            body.setAttribute("role", "rowgroup");
            for (const row of Array.from(body.rows)) {
              row.setAttribute("role", "row");
              let column = 0;
              for (const cell of Array.from(row.cells)) {
                cell.setAttribute("role", cell.tagName === "TH" ? "rowheader" : "cell");
                if (cell.colSpan > 1) {
                  cell.setAttribute("data-full-width", "");
                  cell.removeAttribute("data-label");
                } else {
                  cell.removeAttribute("data-full-width");
                  cell.setAttribute("data-label", labels[column] ?? "");
                }
                column += cell.colSpan;
              }
            }
          }
        }
      }
    };
    ResponsiveTablesDirective = __decorate([
      Directive({
        selector: "[cisResponsiveTables]",
        standalone: true
      })
    ], ResponsiveTablesDirective);
    TableShellComponent = class TableShellComponent2 {
      title = null;
      subtitle = null;
      empty = false;
      emptyMessage = "No data";
      static propDecorators = {
        title: [{ type: Input }],
        subtitle: [{ type: Input }],
        empty: [{ type: Input }],
        emptyMessage: [{ type: Input }]
      };
    };
    TableShellComponent = __decorate([
      Component({
        selector: "cis-table-shell",
        standalone: true,
        imports: [CommonModule],
        hostDirectives: [ResponsiveTablesDirective],
        template: table_shell_component_default,
        styles: [table_shell_component_default2]
      })
    ], TableShellComponent);
  }
});

// src/app/shared/ui/table/table-shell.component.spec.ts
var require_table_shell_component_spec = __commonJS({
  "src/app/shared/ui/table/table-shell.component.spec.ts"(exports) {
    init_tslib_es6();
    init_core();
    init_testing();
    init_table_shell_component3();
    var TestHost = class TestHost {
      heading = "Product";
      clicks = 0;
      extraRow = false;
    };
    TestHost = __decorate([
      Component({
        standalone: true,
        imports: [ResponsiveTablesDirective],
        template: `<div cisResponsiveTables>
    <table>
      <thead><tr><th>{{ heading }}</th><th>Actions</th></tr></thead>
      <tbody>
        <tr><td>Product A</td><td><button (click)="clicks = clicks + 1">Edit</button></td></tr>
        @if (extraRow) { <tr><td>Product B</td><td>Available</td></tr> }
        <tr><td colspan="2"><table><thead><tr><th>Quantity</th></tr></thead><tbody><tr><td>3</td></tr></tbody></table></td></tr>
      </tbody>
    </table>
  </div>`
      })
    ], TestHost);
    describe("ResponsiveTablesDirective", () => {
      const setup = () => {
        const fixture = TestBed.createComponent(TestHost);
        fixture.detectChanges();
        return fixture;
      };
      beforeEach(() => TestBed.configureTestingModule({ imports: [TestHost] }));
      it("labels mobile cells while preserving table semantics and actions", () => {
        const fixture = setup();
        const table = fixture.nativeElement.querySelector("table");
        expect(table.classList.contains("cis-responsive-table")).toBeTrue();
        expect(table.getAttribute("role")).toBe("table");
        expect(table.tBodies[0].rows[0].cells[0].getAttribute("data-label")).toBe("Product");
        expect(table.tBodies[0].rows[0].cells[1].getAttribute("data-label")).toBe("Actions");
        table.querySelector("button").click();
        expect(fixture.componentInstance.clicks).toBe(1);
      });
      it("keeps expanded rows full-width and labels nested tables separately", () => {
        const fixture = setup();
        const tables = fixture.nativeElement.querySelectorAll("table");
        const expanded = tables[0].tBodies[0].rows[1].cells[0];
        expect(expanded.hasAttribute("data-full-width")).toBeTrue();
        expect(expanded.hasAttribute("data-label")).toBeFalse();
        expect(tables[1].tBodies[0].rows[0].cells[0].getAttribute("data-label")).toBe("Quantity");
      });
      it("updates labels after translations and asynchronous rows change", () => __async(null, null, function* () {
        const fixture = setup();
        fixture.componentInstance.heading = "Bidhaa";
        fixture.componentInstance.extraRow = true;
        fixture.detectChanges();
        yield new Promise((resolve) => setTimeout(resolve, 0));
        const table = fixture.nativeElement.querySelector("table");
        expect(table.tBodies[0].rows[0].cells[0].getAttribute("data-label")).toBe("Bidhaa");
        expect(table.tBodies[0].rows[1].cells[0].getAttribute("data-label")).toBe("Bidhaa");
        fixture.destroy();
      }));
    });
  }
});
export default require_table_shell_component_spec();
//# sourceMappingURL=spec-table-shell.component.spec.js.map
