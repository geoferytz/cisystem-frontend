import {
  BarcodeScannerComponent,
  PwaService,
  provideServiceWorker,
  takeUntilDestroyed
} from "./chunk-4GAGM7GI.js";
import {
  ConfirmDialogComponent
} from "./chunk-BBLDYVLB.js";
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables
} from "./chunk-FLID2NBG.js";
import {
  PendingReceivingService
} from "./chunk-VCHFA3NO.js";
import {
  A11yModule,
  CdkTrapFocus,
  ModalComponent
} from "./chunk-TPFUJ5RZ.js";
import {
  PermissionService
} from "./chunk-B2QE76QF.js";
import {
  RowActionsMenuComponent
} from "./chunk-TCOZMI6S.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-P24S6A7J.js";
import {
  PagerComponent
} from "./chunk-QINOI6LA.js";
import {
  MoneyPipe
} from "./chunk-7HLJHSCP.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-EUKW24HZ.js";
import {
  TranslatePipe,
  TranslationService
} from "./chunk-V35BCXNA.js";
import {
  AuthService,
  BranchContext
} from "./chunk-ZQNAR4DZ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  GraphqlService,
  HostListener,
  HttpErrorResponse,
  HttpResponse,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgZone,
  Output,
  UpperCasePipe,
  ViewChild,
  afterNextRender,
  catchError,
  computed,
  forkJoin,
  inject,
  isDevMode,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  tap,
  throwError,
  viewChild,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-ZFAUJJU2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-Y5RQAIA6.js";

// src/app/core/auth/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAuthenticated()) {
    return true;
  }
  return router.parseUrl("/login");
};

// src/app/features/login/login.page.ts
var _c0 = ["emailInput"];
var _c1 = ["passwordInput"];
function LoginPage_p_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r2 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(email_r2);
  }
}
function LoginPage_div_43_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r2.form.controls.email.hasError("required") ? "login.emailRequired" : "login.emailInvalid"), " ");
  }
}
function LoginPage_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "input", 46, 1);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275template(5, LoginPage_div_43_div_5_Template, 3, 3, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(3, 6, "common.email")));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 8, "common.email"))("aria-invalid", ctx_r2.showError("email"))("aria-describedby", ctx_r2.showError("email") ? "login-email-error" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.showError("email"));
  }
}
function LoginPage__svg_svg_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 49);
    \u0275\u0275element(1, "path", 50)(2, "path", 51);
    \u0275\u0275elementEnd();
  }
}
function LoginPage__svg_svg_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 49);
    \u0275\u0275element(1, "path", 52)(2, "path", 53)(3, "path", 54)(4, "path", 55);
    \u0275\u0275elementEnd();
  }
}
function LoginPage_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "login.passwordRequired"));
  }
}
function LoginPage_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "login.capsLock"));
  }
}
function LoginPage_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "login.forgotHint"));
  }
}
function LoginPage_button_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function LoginPage_button_65_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.useDifferentAccount());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "login.differentAccount"), " ");
  }
}
function LoginPage_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r2.lockedEmail() ? "login.sessionLocked" : "login.sessionExpired"), " ");
  }
}
function LoginPage_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.error()));
  }
}
var LOGIN_MUTATION = `mutation Login($input: LoginInput!) { login(input: $input) { accessToken } }`;
var LoginPage = class _LoginPage {
  gql;
  auth;
  router;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
  sessionExpired = signal(false, ...ngDevMode ? [{ debugName: "sessionExpired" }] : []);
  lockedEmail = signal(null, ...ngDevMode ? [{ debugName: "lockedEmail" }] : []);
  capsLock = signal(false, ...ngDevMode ? [{ debugName: "capsLock" }] : []);
  showForgotHint = signal(false, ...ngDevMode ? [{ debugName: "showForgotHint" }] : []);
  submitted = signal(false, ...ngDevMode ? [{ debugName: "submitted" }] : []);
  fb = inject(FormBuilder);
  translationService = inject(TranslationService);
  destroyRef = inject(DestroyRef);
  emailInput = viewChild("emailInput", ...ngDevMode ? [{ debugName: "emailInput" }] : []);
  passwordInput = viewChild("passwordInput", ...ngDevMode ? [{ debugName: "passwordInput" }] : []);
  currentLang = computed(() => this.translationService.currentLang(), ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
    remember: [true]
  });
  constructor(gql, auth, router, route) {
    this.gql = gql;
    this.auth = auth;
    this.router = router;
    if (this.auth.isAuthenticated()) {
      this.router.navigateByUrl("/home");
    }
    this.sessionExpired.set(route.snapshot.queryParamMap.get("session") === "expired");
    const email = this.sessionExpired() ? this.auth.lastEmail() : null;
    if (email) {
      this.lockedEmail.set(email);
      this.form.controls.email.setValue(email);
      this.form.controls.email.disable();
    }
    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      if (this.error())
        this.error.set(null);
    });
    afterNextRender(() => this.focusFirstField());
  }
  /** Show a field error once the user has left the field or tried to submit. */
  showError(name) {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || this.submitted());
  }
  checkCapsLock(event) {
    if (typeof event.getModifierState === "function") {
      this.capsLock.set(event.getModifierState("CapsLock"));
    }
  }
  useDifferentAccount() {
    this.lockedEmail.set(null);
    this.sessionExpired.set(false);
    this.submitted.set(false);
    this.form.controls.email.enable();
    this.form.controls.email.setValue("");
    this.form.controls.email.markAsUntouched();
    setTimeout(() => this.emailInput()?.nativeElement.focus());
  }
  togglePasswordVisibility() {
    this.showPassword.update((v) => !v);
  }
  setLanguage(lang) {
    this.translationService.setLanguage(lang);
  }
  onSubmit() {
    if (this.loading())
      return;
    this.submitted.set(true);
    if (this.form.invalid) {
      this.focusFirstField();
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    const { email, password, remember } = this.form.getRawValue();
    const normalizedEmail = String(email ?? "").trim().toLowerCase();
    this.gql.request(LOGIN_MUTATION, { input: { email: normalizedEmail, password } }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (res) => {
        this.auth.setLastEmail(normalizedEmail);
        this.auth.setAccessToken(res.login.accessToken, !!remember);
        this.loading.set(false);
        this.router.navigateByUrl("/home");
      },
      error: (e) => {
        this.loading.set(false);
        this.error.set(this.toErrorKey(e));
        this.passwordInput()?.nativeElement.select();
      }
    });
  }
  focusFirstField() {
    const email = this.emailInput()?.nativeElement;
    const target = email && (this.form.controls.email.invalid || !this.form.controls.email.value) ? email : this.passwordInput()?.nativeElement;
    target?.focus();
  }
  /** Map backend/network failures to a translated, user-friendly message key. */
  toErrorKey(e) {
    if (e instanceof HttpErrorResponse) {
      return e.status === 0 || e.status >= 500 ? "login.errNetwork" : "login.errGeneric";
    }
    const message = e instanceof Error ? e.message : "";
    if (/invalid credentials/i.test(message))
      return "login.errInvalid";
    if (/inactive/i.test(message))
      return "login.errInactive";
    return message || "login.errGeneric";
  }
  static \u0275fac = function LoginPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginPage)(\u0275\u0275directiveInject(GraphqlService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["cis-login-page"]], viewQuery: function LoginPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.emailInput, _c0, 5);
      \u0275\u0275viewQuerySignal(ctx.passwordInput, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, decls: 75, vars: 57, consts: [["passwordInput", ""], ["emailInput", ""], [1, "cis-login-shell"], ["aria-hidden", "true", 1, "cis-bg-shapes"], [1, "cis-shape", "cis-shape-circle"], [1, "cis-shape", "cis-shape-circle-2"], [1, "cis-shape", "cis-shape-blob"], [1, "cis-shape", "cis-shape-blob-2"], [1, "cis-shape", "cis-shape-ring"], [1, "cis-shape", "cis-shape-dot"], ["role", "group", "aria-label", "Language", 1, "cis-lang-toggle"], ["type", "button", 3, "click"], [1, "cis-login-split"], [1, "cis-brand-side"], [1, "cis-brand-inner"], ["src", "/NABO.png", "alt", "NABOO", 1, "cis-brand-logo"], [1, "cis-brand-title"], [1, "cis-contact"], [1, "cis-contact-label"], ["href", "mailto:info@naboocosmetics.com", 1, "cis-contact-link"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["href", "tel:+255684455740", 1, "cis-contact-link"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], ["aria-hidden", "true", 1, "cis-divider"], [1, "cis-form-side"], [1, "cis-form-content"], [1, "cis-form-heading"], ["class", "cis-locked-email", 4, "ngIf"], ["novalidate", "", 1, "cis-login-form", 3, "ngSubmit", "formGroup"], ["class", "cis-field", 4, "ngIf"], [1, "cis-field"], [1, "cis-password-field"], ["formControlName", "password", "autocomplete", "current-password", 3, "keydown", "keyup", "blur", "type", "placeholder"], ["type", "button", 1, "cis-password-toggle", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "class", "h-4 w-4", 4, "ngIf"], ["id", "login-password-error", "class", "cis-field-error", 4, "ngIf"], ["class", "cis-field-hint", "role", "status", 4, "ngIf"], [1, "cis-form-actions"], ["type", "checkbox", "formControlName", "remember"], ["class", "cis-session-notice", "role", "status", 4, "ngIf"], ["type", "button", "class", "cis-switch-account", 3, "click", 4, "ngIf"], ["class", "cis-error", "role", "alert", 4, "ngIf"], ["type", "submit", 1, "cis-submit", 3, "disabled"], [1, "cis-form-note"], [1, "cis-locked-email"], ["type", "email", "inputmode", "email", "autocapitalize", "none", "spellcheck", "false", "formControlName", "email", "autocomplete", "username", 3, "placeholder"], ["id", "login-email-error", "class", "cis-field-error", 4, "ngIf"], ["id", "login-email-error", 1, "cis-field-error"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 3l18 18"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10.477 10.48a3 3 0 104.243 4.243"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.228 6.228C4.407 7.5 3.089 9.487 2.458 12c1.274 4.057 5.064 7 9.542 7 1.505 0 2.94-.332 4.228-.928"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9.88 4.24A9.952 9.952 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.967 9.967 0 01-3.274 4.504"], ["id", "login-password-error", 1, "cis-field-error"], ["role", "status", 1, "cis-field-hint"], ["role", "status", 1, "cis-session-notice"], ["type", "button", 1, "cis-switch-account", 3, "click"], ["role", "alert", 1, "cis-error"]], template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275element(2, "span", 4)(3, "span", 5)(4, "span", 6)(5, "span", 7)(6, "span", 8)(7, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 10)(9, "button", 11);
      \u0275\u0275listener("click", function LoginPage_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setLanguage("en"));
      });
      \u0275\u0275text(10, "EN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 11);
      \u0275\u0275listener("click", function LoginPage_Template_button_click_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setLanguage("sw"));
      });
      \u0275\u0275text(12, "SW");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 12)(14, "section", 13)(15, "div", 14);
      \u0275\u0275element(16, "img", 15);
      \u0275\u0275elementStart(17, "h2", 16);
      \u0275\u0275text(18, "Sales & Management System");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 17)(20, "span", 18);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 20);
      \u0275\u0275element(25, "path", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " info@naboocosmetics.com ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "a", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 20);
      \u0275\u0275element(29, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, " +255 684 455 740 ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(31, "div", 24);
      \u0275\u0275elementStart(32, "section", 25)(33, "div", 26)(34, "div", 27)(35, "h1");
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p");
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, LoginPage_p_41_Template, 2, 1, "p", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "form", 29);
      \u0275\u0275listener("ngSubmit", function LoginPage_Template_form_ngSubmit_42_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275template(43, LoginPage_div_43_Template, 6, 10, "div", 30);
      \u0275\u0275elementStart(44, "div", 31)(45, "div", 32)(46, "input", 33, 0);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275listener("keydown", function LoginPage_Template_input_keydown_46_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.checkCapsLock($event));
      })("keyup", function LoginPage_Template_input_keyup_46_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.checkCapsLock($event));
      })("blur", function LoginPage_Template_input_blur_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.capsLock.set(false));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 34);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275listener("click", function LoginPage_Template_button_click_50_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePasswordVisibility());
      });
      \u0275\u0275template(52, LoginPage__svg_svg_52_Template, 3, 0, "svg", 35)(53, LoginPage__svg_svg_53_Template, 5, 0, "svg", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(54, LoginPage_div_54_Template, 3, 3, "div", 36)(55, LoginPage_div_55_Template, 3, 3, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 38)(57, "label");
      \u0275\u0275element(58, "input", 39);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "button", 11);
      \u0275\u0275listener("click", function LoginPage_Template_button_click_61_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showForgotHint.set(!ctx.showForgotHint()));
      });
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(64, LoginPage_div_64_Template, 3, 3, "div", 40)(65, LoginPage_button_65_Template, 3, 3, "button", 41)(66, LoginPage_div_66_Template, 3, 3, "div", 40)(67, LoginPage_div_67_Template, 3, 3, "div", 42);
      \u0275\u0275elementStart(68, "button", 43);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "p", 44);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classProp("active", ctx.currentLang() === "en");
      \u0275\u0275attribute("aria-pressed", ctx.currentLang() === "en");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.currentLang() === "sw");
      \u0275\u0275attribute("aria-pressed", ctx.currentLang() === "sw");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 35, "login.contactUs"));
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 37, "login.hi"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 39, "login.welcome"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.lockedEmail());
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.lockedEmail());
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(48, 41, "common.password")))("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(49, 43, "common.password"))("aria-invalid", ctx.showError("password"))("aria-describedby", ctx.showError("password") ? "login-password-error" : null);
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-pressed", ctx.showPassword())("aria-label", \u0275\u0275pipeBind1(51, 45, ctx.showPassword() ? "login.hidePassword" : "login.showPassword"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.showPassword());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPassword());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError("password"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.capsLock());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 47, "login.remember"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-expanded", ctx.showForgotHint());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 49, "login.forgot"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showForgotHint());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lockedEmail());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sessionExpired());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275attribute("aria-busy", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? \u0275\u0275pipeBind1(70, 51, "login.wait") : \u0275\u0275pipeBind1(71, 53, "login.submit"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 55, "login.secure"));
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.cis-login-shell[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  width: 100vw;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  padding: 32px;\n  background: #5f52c7;\n}\n.cis-bg-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n.cis-shape[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n}\n.cis-shape-circle[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 420px;\n  top: -140px;\n  left: -120px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 35% 35%,\n      rgba(201, 127, 96, 0.35),\n      rgba(201, 127, 96, 0.06) 68%);\n  animation: _ngcontent-%COMP%_cis-float 12s ease-in-out infinite;\n}\n.cis-shape-circle-2[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 320px;\n  bottom: -110px;\n  right: -90px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 60% 40%,\n      rgba(245, 218, 191, 0.28),\n      rgba(245, 218, 191, 0.05) 70%);\n  animation: _ngcontent-%COMP%_cis-float 14s ease-in-out infinite reverse;\n}\n.cis-shape-blob[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 260px;\n  top: 12%;\n  right: 8%;\n  border-radius: 42% 58% 62% 38%/46% 42% 58% 54%;\n  background: rgba(255, 255, 255, 0.08);\n  animation: _ngcontent-%COMP%_cis-morph 16s ease-in-out infinite;\n}\n.cis-shape-blob-2[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  bottom: 14%;\n  left: 6%;\n  border-radius: 58% 42% 40% 60%/50% 58% 42% 50%;\n  border: 2px solid rgba(245, 218, 191, 0.28);\n  animation: _ngcontent-%COMP%_cis-morph 18s ease-in-out infinite reverse, _ngcontent-%COMP%_cis-float 11s ease-in-out infinite;\n}\n.cis-shape-ring[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  top: 58%;\n  left: 44%;\n  border-radius: 50%;\n  border: 14px solid rgba(255, 255, 255, 0.07);\n  animation: _ngcontent-%COMP%_cis-spin 24s linear infinite;\n}\n.cis-shape-dot[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  top: 26%;\n  left: 38%;\n  border-radius: 50%;\n  background: rgba(245, 218, 191, 0.55);\n  box-shadow:\n    60px 90px 0 -4px rgba(255, 255, 255, 0.3),\n    140px -60px 0 -6px rgba(245, 218, 191, 0.4),\n    -80px 160px 0 -5px rgba(245, 218, 191, 0.35);\n  animation: _ngcontent-%COMP%_cis-float 9s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_cis-float {\n  0%, 100% {\n    transform: translate(0, 0);\n  }\n  50% {\n    transform: translate(18px, -24px);\n  }\n}\n@keyframes _ngcontent-%COMP%_cis-morph {\n  0%, 100% {\n    border-radius: 42% 58% 62% 38%/46% 42% 58% 54%;\n    transform: rotate(0deg);\n  }\n  50% {\n    border-radius: 58% 42% 40% 60%/54% 58% 42% 46%;\n    transform: rotate(14deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_cis-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .cis-shape[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.cis-lang-toggle[_ngcontent-%COMP%] {\n  position: fixed;\n  top: max(20px, env(safe-area-inset-top));\n  right: max(20px, env(safe-area-inset-right));\n  z-index: 10;\n  display: flex;\n  gap: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 999px;\n  padding: 4px;\n  background: rgba(26, 5, 8, 0.35);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.cis-lang-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 44px;\n  min-height: 32px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n}\n.cis-lang-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #5f52c7;\n}\n.cis-login-split[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: stretch;\n  width: min(1080px, 100%);\n  min-height: 560px;\n}\n.cis-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  margin: 0 8px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      rgba(255, 255, 255, 0.4) 20%,\n      rgba(255, 255, 255, 0.4) 80%,\n      transparent);\n}\n.cis-form-side[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 56px;\n}\n.cis-form-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 340px;\n}\n.cis-form-heading[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.cis-form-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n  font-size: clamp(36px, 4vw, 50px);\n  font-weight: 900;\n  letter-spacing: -0.04em;\n  line-height: 1.05;\n}\n.cis-form-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 14px;\n  font-weight: 600;\n}\n.cis-login-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.cis-login-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], \n.cis-password-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  border: 1px solid rgba(255, 255, 255, 0.28);\n  border-radius: 12px;\n  padding: 0 16px;\n  background: rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  font-size: 14px;\n  outline: none;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  transition:\n    border-color 160ms ease,\n    box-shadow 160ms ease,\n    background 160ms ease;\n}\n.cis-login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.cis-password-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n.cis-login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.cis-password-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(255, 255, 255, 0.75);\n  background: rgba(255, 255, 255, 0.16);\n  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.12);\n}\n.cis-field[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n}\n.cis-login-form[_ngcontent-%COMP%]   input[aria-invalid=true][_ngcontent-%COMP%] {\n  border-color: rgba(254, 202, 202, 0.85);\n}\n.cis-field-error[_ngcontent-%COMP%], \n.cis-field-hint[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.cis-field-error[_ngcontent-%COMP%] {\n  color: #fecaca;\n}\n.cis-field-hint[_ngcontent-%COMP%] {\n  color: #fde68a;\n}\n.cis-locked-email[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #ffffff !important;\n  font-weight: 700 !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cis-password-field[_ngcontent-%COMP%] {\n  position: relative;\n}\n.cis-password-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 48px;\n}\n.cis-password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 14px;\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border: 0;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.72);\n  transform: translateY(-50%);\n}\n.cis-password-toggle[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.cis-password-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n}\n.cis-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 12px;\n}\n.cis-form-actions[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n.cis-form-actions[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: #e7e5fb;\n}\n.cis-form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #e7e5fb;\n  font-weight: 700;\n}\n.cis-form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.cis-switch-account[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #e7e5fb;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: center;\n}\n.cis-switch-account[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.cis-error[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 12px;\n  background: rgba(254, 202, 202, 0.16);\n  border: 1px solid rgba(254, 202, 202, 0.35);\n  color: #fecaca;\n  font-size: 13px;\n  font-weight: 600;\n}\n.cis-session-notice[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 12px;\n  background: rgba(254, 243, 199, 0.16);\n  border: 1px solid rgba(254, 243, 199, 0.35);\n  color: #fde68a;\n  font-size: 13px;\n  font-weight: 600;\n}\n.cis-submit[_ngcontent-%COMP%] {\n  height: 50px;\n  border: 0;\n  border-radius: 999px;\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 0.02em;\n  box-shadow: 0 15px 30px rgba(26, 5, 8, 0.35);\n  transition: background 160ms ease, transform 120ms ease;\n}\n.cis-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e7e5fb;\n  transform: translateY(-1px);\n}\n.cis-submit[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.cis-form-note[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: rgba(255, 255, 255, 0.62);\n  font-size: 12px;\n  text-align: center;\n}\n.cis-brand-side[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 56px;\n}\n.cis-brand-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  text-align: center;\n}\n.cis-brand-logo[_ngcontent-%COMP%] {\n  display: block;\n  height: 84px;\n  width: auto;\n  max-width: 100%;\n  object-fit: contain;\n  filter: drop-shadow(0 10px 24px rgba(26, 5, 8, 0.4));\n}\n.cis-brand-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n  font-size: clamp(18px, 2vw, 24px);\n  font-weight: 800;\n  letter-spacing: 0.01em;\n}\n.cis-contact[_ngcontent-%COMP%] {\n  margin-top: 26px;\n  display: grid;\n  gap: 10px;\n  justify-items: center;\n}\n.cis-contact-label[_ngcontent-%COMP%] {\n  color: #e7e5fb;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.cis-contact-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #ffffff;\n  font-size: 13px;\n  font-weight: 600;\n  text-decoration: none;\n  opacity: 0.92;\n}\n.cis-contact-link[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  text-decoration: underline;\n}\n.cis-contact-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n@media (max-width: 860px) {\n  .cis-login-shell[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .cis-login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .cis-login-split[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    min-height: auto;\n    gap: 0;\n  }\n  .cis-divider[_ngcontent-%COMP%] {\n    width: auto;\n    height: 1px;\n    margin: 8px 0;\n    background:\n      linear-gradient(\n        90deg,\n        transparent,\n        rgba(255, 255, 255, 0.4) 20%,\n        rgba(255, 255, 255, 0.4) 80%,\n        transparent);\n  }\n  .cis-form-side[_ngcontent-%COMP%] {\n    padding: 40px 28px 30px;\n    order: 1;\n  }\n  .cis-brand-side[_ngcontent-%COMP%] {\n    padding: 30px 28px 40px;\n    order: 2;\n  }\n  .cis-brand-logo[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n}\n/*# sourceMappingURL=login.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{ selector: "cis-login-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslatePipe], template: `<div class="cis-login-shell">\r
  <div class="cis-bg-shapes" aria-hidden="true">\r
    <span class="cis-shape cis-shape-circle"></span>\r
    <span class="cis-shape cis-shape-circle-2"></span>\r
    <span class="cis-shape cis-shape-blob"></span>\r
    <span class="cis-shape cis-shape-blob-2"></span>\r
    <span class="cis-shape cis-shape-ring"></span>\r
    <span class="cis-shape cis-shape-dot"></span>\r
  </div>\r
\r
  <div class="cis-lang-toggle" role="group" aria-label="Language">\r
    <button type="button" [class.active]="currentLang() === 'en'" [attr.aria-pressed]="currentLang() === 'en'" (click)="setLanguage('en')">EN</button>\r
    <button type="button" [class.active]="currentLang() === 'sw'" [attr.aria-pressed]="currentLang() === 'sw'" (click)="setLanguage('sw')">SW</button>\r
  </div>\r
\r
  <div class="cis-login-split">\r
    <section class="cis-brand-side">\r
      <div class="cis-brand-inner">\r
        <img src="/NABO.png" alt="NABOO" class="cis-brand-logo" />\r
        <h2 class="cis-brand-title">Sales &amp; Management System</h2>\r
\r
        <div class="cis-contact">\r
          <span class="cis-contact-label">{{ 'login.contactUs' | translate }}</span>\r
          <a class="cis-contact-link" href="mailto:info@naboocosmetics.com">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />\r
            </svg>\r
            info@naboocosmetics.com\r
          </a>\r
          <a class="cis-contact-link" href="tel:+255684455740">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />\r
            </svg>\r
            +255 684 455 740\r
          </a>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <div class="cis-divider" aria-hidden="true"></div>\r
\r
    <section class="cis-form-side">\r
      <div class="cis-form-content">\r
        <div class="cis-form-heading">\r
          <h1>{{ 'login.hi' | translate }}</h1>\r
          <p>{{ 'login.welcome' | translate }}</p>\r
          <p class="cis-locked-email" *ngIf="lockedEmail() as email">{{ email }}</p>\r
        </div>\r
\r
        <form class="cis-login-form" [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\r
\r
          <div class="cis-field" *ngIf="!lockedEmail()">\r
            <input\r
              #emailInput\r
              type="email"\r
              inputmode="email"\r
              autocapitalize="none"\r
              spellcheck="false"\r
              placeholder="{{ 'common.email' | translate }}"\r
              [attr.aria-label]="'common.email' | translate"\r
              formControlName="email"\r
              autocomplete="username"\r
              [attr.aria-invalid]="showError('email')"\r
              [attr.aria-describedby]="showError('email') ? 'login-email-error' : null" />\r
            <div id="login-email-error" class="cis-field-error" *ngIf="showError('email')">\r
              {{ (form.controls.email.hasError('required') ? 'login.emailRequired' : 'login.emailInvalid') | translate }}\r
            </div>\r
          </div>\r
\r
          <div class="cis-field">\r
            <div class="cis-password-field">\r
              <input\r
                #passwordInput\r
                [type]="showPassword() ? 'text' : 'password'"\r
                placeholder="{{ 'common.password' | translate }}"\r
                [attr.aria-label]="'common.password' | translate"\r
                formControlName="password"\r
                autocomplete="current-password"\r
                (keydown)="checkCapsLock($event)"\r
                (keyup)="checkCapsLock($event)"\r
                (blur)="capsLock.set(false)"\r
                [attr.aria-invalid]="showError('password')"\r
                [attr.aria-describedby]="showError('password') ? 'login-password-error' : null" />\r
\r
              <button\r
                type="button"\r
                class="cis-password-toggle"\r
                (click)="togglePasswordVisibility()"\r
                [attr.aria-pressed]="showPassword()"\r
                [attr.aria-label]="(showPassword() ? 'login.hidePassword' : 'login.showPassword') | translate">\r
              <svg *ngIf="!showPassword()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />\r
              </svg>\r
              <svg *ngIf="showPassword()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18" />\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.477 10.48a3 3 0 104.243 4.243" />\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.228 6.228C4.407 7.5 3.089 9.487 2.458 12c1.274 4.057 5.064 7 9.542 7 1.505 0 2.94-.332 4.228-.928" />\r
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.88 4.24A9.952 9.952 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.967 9.967 0 01-3.274 4.504" />\r
              </svg>\r
              </button>\r
            </div>\r
            <div id="login-password-error" class="cis-field-error" *ngIf="showError('password')">{{ 'login.passwordRequired' | translate }}</div>\r
            <div class="cis-field-hint" role="status" *ngIf="capsLock()">{{ 'login.capsLock' | translate }}</div>\r
          </div>\r
\r
          <div class="cis-form-actions">\r
            <label>\r
              <input type="checkbox" formControlName="remember" />\r
              {{ 'login.remember' | translate }}\r
            </label>\r
            <button type="button" [attr.aria-expanded]="showForgotHint()" (click)="showForgotHint.set(!showForgotHint())">{{ 'login.forgot' | translate }}</button>\r
          </div>\r
\r
          <div class="cis-session-notice" role="status" *ngIf="showForgotHint()">{{ 'login.forgotHint' | translate }}</div>\r
\r
          <button type="button" class="cis-switch-account" *ngIf="lockedEmail()" (click)="useDifferentAccount()">\r
            {{ 'login.differentAccount' | translate }}\r
          </button>\r
\r
          <div class="cis-session-notice" role="status" *ngIf="sessionExpired()">\r
            {{ (lockedEmail() ? 'login.sessionLocked' : 'login.sessionExpired') | translate }}\r
          </div>\r
          <div class="cis-error" role="alert" *ngIf="error()">{{ error()! | translate }}</div>\r
\r
          <button class="cis-submit" type="submit" [disabled]="loading()" [attr.aria-busy]="loading()">\r
            {{ loading() ? ('login.wait' | translate) : ('login.submit' | translate) }}\r
          </button>\r
        </form>\r
\r
        <p class="cis-form-note">{{ 'login.secure' | translate }}</p>\r
      </div>\r
    </section>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/login/login.page.scss */\n:host {\n  display: block;\n}\n.cis-login-shell {\n  position: relative;\n  min-height: 100vh;\n  width: 100vw;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  padding: 32px;\n  background: #5f52c7;\n}\n.cis-bg-shapes {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n.cis-shape {\n  position: absolute;\n  display: block;\n}\n.cis-shape-circle {\n  width: 420px;\n  height: 420px;\n  top: -140px;\n  left: -120px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 35% 35%,\n      rgba(201, 127, 96, 0.35),\n      rgba(201, 127, 96, 0.06) 68%);\n  animation: cis-float 12s ease-in-out infinite;\n}\n.cis-shape-circle-2 {\n  width: 320px;\n  height: 320px;\n  bottom: -110px;\n  right: -90px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 60% 40%,\n      rgba(245, 218, 191, 0.28),\n      rgba(245, 218, 191, 0.05) 70%);\n  animation: cis-float 14s ease-in-out infinite reverse;\n}\n.cis-shape-blob {\n  width: 260px;\n  height: 260px;\n  top: 12%;\n  right: 8%;\n  border-radius: 42% 58% 62% 38%/46% 42% 58% 54%;\n  background: rgba(255, 255, 255, 0.08);\n  animation: cis-morph 16s ease-in-out infinite;\n}\n.cis-shape-blob-2 {\n  width: 200px;\n  height: 200px;\n  bottom: 14%;\n  left: 6%;\n  border-radius: 58% 42% 40% 60%/50% 58% 42% 50%;\n  border: 2px solid rgba(245, 218, 191, 0.28);\n  animation: cis-morph 18s ease-in-out infinite reverse, cis-float 11s ease-in-out infinite;\n}\n.cis-shape-ring {\n  width: 120px;\n  height: 120px;\n  top: 58%;\n  left: 44%;\n  border-radius: 50%;\n  border: 14px solid rgba(255, 255, 255, 0.07);\n  animation: cis-spin 24s linear infinite;\n}\n.cis-shape-dot {\n  width: 16px;\n  height: 16px;\n  top: 26%;\n  left: 38%;\n  border-radius: 50%;\n  background: rgba(245, 218, 191, 0.55);\n  box-shadow:\n    60px 90px 0 -4px rgba(255, 255, 255, 0.3),\n    140px -60px 0 -6px rgba(245, 218, 191, 0.4),\n    -80px 160px 0 -5px rgba(245, 218, 191, 0.35);\n  animation: cis-float 9s ease-in-out infinite;\n}\n@keyframes cis-float {\n  0%, 100% {\n    transform: translate(0, 0);\n  }\n  50% {\n    transform: translate(18px, -24px);\n  }\n}\n@keyframes cis-morph {\n  0%, 100% {\n    border-radius: 42% 58% 62% 38%/46% 42% 58% 54%;\n    transform: rotate(0deg);\n  }\n  50% {\n    border-radius: 58% 42% 40% 60%/54% 58% 42% 46%;\n    transform: rotate(14deg);\n  }\n}\n@keyframes cis-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .cis-shape {\n    animation: none;\n  }\n}\n.cis-lang-toggle {\n  position: fixed;\n  top: max(20px, env(safe-area-inset-top));\n  right: max(20px, env(safe-area-inset-right));\n  z-index: 10;\n  display: flex;\n  gap: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 999px;\n  padding: 4px;\n  background: rgba(26, 5, 8, 0.35);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.cis-lang-toggle button {\n  min-width: 44px;\n  min-height: 32px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n}\n.cis-lang-toggle button.active {\n  background: #ffffff;\n  color: #5f52c7;\n}\n.cis-login-split {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: stretch;\n  width: min(1080px, 100%);\n  min-height: 560px;\n}\n.cis-divider {\n  width: 1px;\n  margin: 0 8px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      rgba(255, 255, 255, 0.4) 20%,\n      rgba(255, 255, 255, 0.4) 80%,\n      transparent);\n}\n.cis-form-side {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 56px;\n}\n.cis-form-content {\n  width: 100%;\n  max-width: 340px;\n}\n.cis-form-heading {\n  margin-bottom: 30px;\n}\n.cis-form-heading h1 {\n  margin: 0;\n  color: #ffffff;\n  font-size: clamp(36px, 4vw, 50px);\n  font-weight: 900;\n  letter-spacing: -0.04em;\n  line-height: 1.05;\n}\n.cis-form-heading p {\n  margin: 10px 0 0;\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 14px;\n  font-weight: 600;\n}\n.cis-login-form {\n  display: grid;\n  gap: 14px;\n}\n.cis-login-form input[type=email],\n.cis-password-field input {\n  width: 100%;\n  height: 50px;\n  border: 1px solid rgba(255, 255, 255, 0.28);\n  border-radius: 12px;\n  padding: 0 16px;\n  background: rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  font-size: 14px;\n  outline: none;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  transition:\n    border-color 160ms ease,\n    box-shadow 160ms ease,\n    background 160ms ease;\n}\n.cis-login-form input::placeholder,\n.cis-password-field input::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n.cis-login-form input:focus,\n.cis-password-field input:focus {\n  border-color: rgba(255, 255, 255, 0.75);\n  background: rgba(255, 255, 255, 0.16);\n  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.12);\n}\n.cis-field {\n  display: grid;\n  gap: 6px;\n}\n.cis-login-form input[aria-invalid=true] {\n  border-color: rgba(254, 202, 202, 0.85);\n}\n.cis-field-error,\n.cis-field-hint {\n  padding-left: 4px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.cis-field-error {\n  color: #fecaca;\n}\n.cis-field-hint {\n  color: #fde68a;\n}\n.cis-locked-email {\n  overflow: hidden;\n  color: #ffffff !important;\n  font-weight: 700 !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cis-password-field {\n  position: relative;\n}\n.cis-password-field input {\n  padding-right: 48px;\n}\n.cis-password-toggle {\n  position: absolute;\n  top: 50%;\n  right: 14px;\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border: 0;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.72);\n  transform: translateY(-50%);\n}\n.cis-password-toggle:hover {\n  color: #ffffff;\n}\n.cis-password-toggle svg {\n  width: 17px;\n  height: 17px;\n}\n.cis-form-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 12px;\n}\n.cis-form-actions label {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n.cis-form-actions input[type=checkbox] {\n  accent-color: #e7e5fb;\n}\n.cis-form-actions button {\n  border: 0;\n  background: transparent;\n  color: #e7e5fb;\n  font-weight: 700;\n}\n.cis-form-actions button:hover {\n  text-decoration: underline;\n}\n.cis-switch-account {\n  border: 0;\n  background: transparent;\n  color: #e7e5fb;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: center;\n}\n.cis-switch-account:hover {\n  text-decoration: underline;\n}\n.cis-error {\n  padding: 10px 14px;\n  border-radius: 12px;\n  background: rgba(254, 202, 202, 0.16);\n  border: 1px solid rgba(254, 202, 202, 0.35);\n  color: #fecaca;\n  font-size: 13px;\n  font-weight: 600;\n}\n.cis-session-notice {\n  padding: 10px 14px;\n  border-radius: 12px;\n  background: rgba(254, 243, 199, 0.16);\n  border: 1px solid rgba(254, 243, 199, 0.35);\n  color: #fde68a;\n  font-size: 13px;\n  font-weight: 600;\n}\n.cis-submit {\n  height: 50px;\n  border: 0;\n  border-radius: 999px;\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n  font-size: 14px;\n  font-weight: 900;\n  letter-spacing: 0.02em;\n  box-shadow: 0 15px 30px rgba(26, 5, 8, 0.35);\n  transition: background 160ms ease, transform 120ms ease;\n}\n.cis-submit:hover:not(:disabled) {\n  background: #e7e5fb;\n  transform: translateY(-1px);\n}\n.cis-submit:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.cis-form-note {\n  margin-top: 20px;\n  color: rgba(255, 255, 255, 0.62);\n  font-size: 12px;\n  text-align: center;\n}\n.cis-brand-side {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 56px;\n}\n.cis-brand-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  text-align: center;\n}\n.cis-brand-logo {\n  display: block;\n  height: 84px;\n  width: auto;\n  max-width: 100%;\n  object-fit: contain;\n  filter: drop-shadow(0 10px 24px rgba(26, 5, 8, 0.4));\n}\n.cis-brand-title {\n  margin: 0;\n  color: #ffffff;\n  font-size: clamp(18px, 2vw, 24px);\n  font-weight: 800;\n  letter-spacing: 0.01em;\n}\n.cis-contact {\n  margin-top: 26px;\n  display: grid;\n  gap: 10px;\n  justify-items: center;\n}\n.cis-contact-label {\n  color: #e7e5fb;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.cis-contact-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #ffffff;\n  font-size: 13px;\n  font-weight: 600;\n  text-decoration: none;\n  opacity: 0.92;\n}\n.cis-contact-link:hover {\n  opacity: 1;\n  text-decoration: underline;\n}\n.cis-contact-link svg {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n@media (max-width: 860px) {\n  .cis-login-shell {\n    padding: 18px;\n  }\n  .cis-login-form input {\n    font-size: 16px;\n  }\n  .cis-login-split {\n    grid-template-columns: 1fr;\n    min-height: auto;\n    gap: 0;\n  }\n  .cis-divider {\n    width: auto;\n    height: 1px;\n    margin: 8px 0;\n    background:\n      linear-gradient(\n        90deg,\n        transparent,\n        rgba(255, 255, 255, 0.4) 20%,\n        rgba(255, 255, 255, 0.4) 80%,\n        transparent);\n  }\n  .cis-form-side {\n    padding: 40px 28px 30px;\n    order: 1;\n  }\n  .cis-brand-side {\n    padding: 30px 28px 40px;\n    order: 2;\n  }\n  .cis-brand-logo {\n    height: 60px;\n  }\n}\n/*# sourceMappingURL=login.page.css.map */\n"] }]
  }], () => [{ type: GraphqlService }, { type: AuthService }, { type: Router }, { type: ActivatedRoute }], { emailInput: [{ type: ViewChild, args: ["emailInput", { isSignal: true }] }], passwordInput: [{ type: ViewChild, args: ["passwordInput", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "app/features/login/login.page.ts", lineNumber: 27 });
})();

// src/app/core/theme/theme.service.ts
var ThemeService = class _ThemeService {
  STORAGE_KEY = "cisystem-theme";
  _isDark = signal(this.loadThemeFromStorage(), ...ngDevMode ? [{ debugName: "_isDark" }] : []);
  isDark = this._isDark.asReadonly();
  themeClass = computed(() => this._isDark() ? "dark" : "light", ...ngDevMode ? [{ debugName: "themeClass" }] : []);
  constructor() {
    this.applyTheme();
  }
  loadThemeFromStorage() {
    if (typeof window === "undefined")
      return false;
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored === "dark";
    } catch {
      return false;
    }
  }
  saveThemeToStorage(isDark) {
    if (typeof window === "undefined")
      return;
    try {
      localStorage.setItem(this.STORAGE_KEY, isDark ? "dark" : "light");
    } catch {
    }
  }
  applyTheme() {
    if (typeof document === "undefined")
      return;
    const html = document.documentElement;
    if (this._isDark()) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }
  toggleTheme() {
    this._isDark.update((v) => !v);
    this.saveThemeToStorage(this._isDark());
    this.applyTheme();
  }
  setTheme(isDark) {
    this._isDark.set(isDark);
    this.saveThemeToStorage(isDark);
    this.applyTheme();
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/features/shell/shell-header.component.ts
function ShellHeaderComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ShellHeaderComponent_button_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.onToggleSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "path", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-expanded", ctx_r1.sidebarOpen);
  }
}
function ShellHeaderComponent__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 24);
    \u0275\u0275elementEnd();
  }
}
function ShellHeaderComponent__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function ShellHeaderComponent__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 26);
    \u0275\u0275elementEnd();
  }
}
function ShellHeaderComponent__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function ShellHeaderComponent_div_20_button_1__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
function ShellHeaderComponent_div_20_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ShellHeaderComponent_div_20_button_1_Template_button_click_0_listener($event) {
      const lang_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.setLang(lang_r4));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ShellHeaderComponent_div_20_button_1__svg_svg_4_Template, 2, 0, "svg", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-slate-100", ctx_r1.currentLang() === lang_r4)("dark:bg-slate-700", ctx_r1.currentLang() === lang_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, lang_r4));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentLang() === lang_r4);
  }
}
function ShellHeaderComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, ShellHeaderComponent_div_20_button_1_Template, 5, 8, "button", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.availableLangs);
  }
}
function ShellHeaderComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.notificationsCount, " ");
  }
}
function ShellHeaderComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 38);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "span", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 40);
    \u0275\u0275listener("click", function ShellHeaderComponent_div_26_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCloseMenus());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "header.notifications"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "header.notificationsHelp"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "header.total"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.notificationsCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "header.viewAlerts"));
  }
}
function ShellHeaderComponent_div_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(\u0275\u0275pipeBind1(1, 3, "common.branch")));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r1.branchCtx.me()) == null ? null : tmp_3_0.branchName) || ctx_r1.branchCtx.lockedCode(), " ");
  }
}
function ShellHeaderComponent_div_27_div_2_div_7__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
function ShellHeaderComponent_div_27_div_2_div_7_button_6__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
function ShellHeaderComponent_div_27_div_2_div_7_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ShellHeaderComponent_div_27_div_2_div_7_button_6_Template_button_click_0_listener($event) {
      const b_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.selectBranch(b_r9.code));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ShellHeaderComponent_div_27_div_2_div_7_button_6__svg_svg_3_Template, 2, 0, "svg", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("bg-slate-100", ctx_r1.branchCtx.selected() === b_r9.code)("dark:bg-slate-700", ctx_r1.branchCtx.selected() === b_r9.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", b_r9.name, " (", b_r9.code, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.branchCtx.selected() === b_r9.code);
  }
}
function ShellHeaderComponent_div_27_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "button", 30);
    \u0275\u0275listener("click", function ShellHeaderComponent_div_27_div_2_div_7_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.selectBranch(null));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ShellHeaderComponent_div_27_div_2_div_7__svg_svg_5_Template, 2, 0, "svg", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ShellHeaderComponent_div_27_div_2_div_7_button_6_Template, 4, 7, "button", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-slate-100", ctx_r1.branchCtx.selected() == null)("dark:bg-slate-700", ctx_r1.branchCtx.selected() == null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "common.allBranches"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.branchCtx.selected() == null);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.branchCtx.options());
  }
}
function ShellHeaderComponent_div_27_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("click", function ShellHeaderComponent_div_27_div_2_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 46);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ShellHeaderComponent_div_27_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onToggleBranchMenu());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 10);
    \u0275\u0275element(4, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "svg", 10);
    \u0275\u0275element(6, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ShellHeaderComponent_div_27_div_2_div_7_Template, 7, 9, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(2, 3, "common.branch")));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.branchMenuOpen);
  }
}
function ShellHeaderComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, ShellHeaderComponent_div_27_span_1_Template, 5, 5, "span", 42)(2, ShellHeaderComponent_div_27_div_2_Template, 8, 5, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.branchCtx.locked());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.branchCtx.locked() && ctx_r1.branchCtx.options().length);
  }
}
function ShellHeaderComponent_div_33_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function ShellHeaderComponent_div_33_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.onCloseMenus();
      return \u0275\u0275resetView(ctx_r1.onResetUserPassword());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 54);
    \u0275\u0275element(2, "path", 61)(3, "path", 62)(4, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "header.resetUserPassword"), " ");
  }
}
function ShellHeaderComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "div", 52);
    \u0275\u0275elementStart(8, "button", 53);
    \u0275\u0275listener("click", function ShellHeaderComponent_div_33_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.onCloseMenus();
      return \u0275\u0275resetView(ctx_r1.onChangePassword());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 54);
    \u0275\u0275element(10, "path", 55)(11, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ShellHeaderComponent_div_33_button_14_Template, 7, 3, "button", 57);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 53);
    \u0275\u0275listener("click", function ShellHeaderComponent_div_33_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.onCloseMenus();
      return \u0275\u0275resetView(ctx_r1.onLogout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 54);
    \u0275\u0275element(17, "path", 58)(18, "path", 59)(19, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.user == null ? null : ctx_r1.user.name) || \u0275\u0275pipeBind1(4, 5, "header.user"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.user == null ? null : ctx_r1.user.email) || "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, "header.changePassword"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.user == null ? null : ctx_r1.user.roles == null ? null : ctx_r1.user.roles.includes("ADMIN"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 9, "header.logout"), " ");
  }
}
var ShellHeaderComponent = class _ShellHeaderComponent {
  themeService = inject(ThemeService);
  translationService = inject(TranslationService);
  branchCtx = inject(BranchContext);
  user = null;
  isAuthed = false;
  showSidebarToggle = false;
  sidebarOpen = true;
  notificationsCount = 0;
  notificationsOpen = false;
  userMenuOpen = false;
  langMenuOpen = false;
  branchMenuOpen = false;
  toggleNotifications = new EventEmitter();
  toggleUserMenu = new EventEmitter();
  closeMenus = new EventEmitter();
  changePassword = new EventEmitter();
  resetUserPassword = new EventEmitter();
  logout = new EventEmitter();
  toggleSidebar = new EventEmitter();
  toggleLangMenu = new EventEmitter();
  toggleBranchMenu = new EventEmitter();
  currentLang = this.translationService.currentLang;
  availableLangs = this.translationService.availableLangs;
  isDark = this.themeService.isDark;
  isFullscreen = signal(false, ...ngDevMode ? [{ debugName: "isFullscreen" }] : []);
  onToggleBranchMenu() {
    this.toggleBranchMenu.emit();
  }
  selectBranch(code) {
    this.branchCtx.select(code);
    location.reload();
  }
  onToggleNotifications() {
    this.toggleNotifications.emit();
  }
  onToggleUserMenu() {
    this.toggleUserMenu.emit();
  }
  onCloseMenus() {
    this.closeMenus.emit();
  }
  onLogout() {
    this.logout.emit();
  }
  onChangePassword() {
    this.changePassword.emit();
  }
  onResetUserPassword() {
    this.resetUserPassword.emit();
  }
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
  onToggleLangMenu() {
    this.toggleLangMenu.emit();
  }
  setLang(lang) {
    this.translationService.setLanguage(lang);
    this.closeMenus.emit();
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        this.isFullscreen.set(true);
      }).catch(() => {
      });
    } else {
      document.exitFullscreen().then(() => {
        this.isFullscreen.set(false);
      }).catch(() => {
      });
    }
  }
  static \u0275fac = function ShellHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellHeaderComponent, selectors: [["app-shell-header"]], inputs: { user: "user", isAuthed: "isAuthed", showSidebarToggle: "showSidebarToggle", sidebarOpen: "sidebarOpen", notificationsCount: "notificationsCount", notificationsOpen: "notificationsOpen", userMenuOpen: "userMenuOpen", langMenuOpen: "langMenuOpen", branchMenuOpen: "branchMenuOpen" }, outputs: { toggleNotifications: "toggleNotifications", toggleUserMenu: "toggleUserMenu", closeMenus: "closeMenus", changePassword: "changePassword", resetUserPassword: "resetUserPassword", logout: "logout", toggleSidebar: "toggleSidebar", toggleLangMenu: "toggleLangMenu", toggleBranchMenu: "toggleBranchMenu" }, decls: 34, vars: 18, consts: [[1, "relative", "z-40", "mb-4", "flex", "flex-wrap", "items-center", "gap-1", "rounded-2xl", "bg-white", "dark:bg-slate-800", "px-2", "py-3", "sm:gap-3", "sm:px-4", "shadow-sm", "ring-1", "ring-slate-200", "dark:ring-slate-700"], ["type", "button", "class", "inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700", "aria-label", "Toggle navigation", "aria-controls", "main-sidebar", 3, "click", 4, "ngIf"], ["routerLink", "/home", 1, "text-sm", "font-bold", "text-primary-800", "dark:text-primary-200", "md:hidden"], [1, "ml-auto", "flex", "items-center", "justify-end", "gap-1", "sm:gap-3"], [1, "relative", 3, "click"], ["type", "button", "aria-label", "Toggle theme", 1, "inline-flex", "h-10", "w-10", "items-center", "justify-center", "rounded-xl", "text-slate-700", "dark:text-slate-200", "hover:bg-slate-100", "dark:hover:bg-slate-700", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "class", "h-5 w-5", 4, "ngIf"], [1, "relative", "hidden", "md:block", 3, "click"], ["type", "button", "aria-label", "Toggle fullscreen", 1, "inline-flex", "h-10", "w-10", "items-center", "justify-center", "rounded-xl", "text-slate-700", "dark:text-slate-200", "hover:bg-slate-100", "dark:hover:bg-slate-700", 3, "click"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "rounded-xl", "px-3", "py-2", "text-sm", "font-semibold", "text-slate-700", "dark:text-slate-200", "hover:bg-slate-100", "dark:hover:bg-slate-700", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 9l-7 7-7-7"], ["class", "absolute right-0 z-50 mt-2 w-32 rounded-2xl bg-white dark:bg-slate-800 p-2 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700", 4, "ngIf"], ["type", "button", "aria-label", "Notifications", 1, "relative", "inline-flex", "h-10", "w-10", "items-center", "justify-center", "rounded-xl", "text-slate-700", "dark:text-slate-200", "hover:bg-slate-100", "dark:hover:bg-slate-700", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"], ["class", "absolute -right-1 -top-1 inline-flex min-w-[18px] items-center justify-center rounded-full bg-[#B81104] px-1.5 py-0.5 text-[10px] font-bold leading-none text-white", 4, "ngIf"], ["class", "absolute right-0 z-50 mt-2 w-80 rounded-2xl bg-white dark:bg-slate-800 p-3 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700", 4, "ngIf"], ["class", "flex items-center", 4, "ngIf"], ["type", "button", 1, "inline-flex", "h-10", "w-10", "items-center", "justify-center", "rounded-xl", "text-slate-700", "dark:text-slate-200", "hover:bg-slate-100", "dark:hover:bg-slate-700", 3, "click", "aria-label"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "bg-pink-500", "text-sm", "font-bold", "text-white"], ["class", "absolute right-0 z-50 mt-2 w-64 rounded-2xl bg-white dark:bg-slate-800 p-2 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700", 4, "ngIf"], ["type", "button", "aria-label", "Toggle navigation", "aria-controls", "main-sidebar", 1, "inline-flex", "h-10", "w-10", "items-center", "justify-center", "rounded-xl", "text-slate-700", "dark:text-slate-200", "hover:bg-slate-100", "dark:hover:bg-slate-700", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 6h16M4 12h16M4 18h16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "absolute", "right-0", "z-50", "mt-2", "w-32", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-2", "shadow-lg", "ring-1", "ring-slate-200", "dark:ring-slate-700"], ["type", "button", "class", "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700", 3, "bg-slate-100", "dark:bg-slate-700", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "flex", "w-full", "items-center", "justify-between", "rounded-xl", "px-3", "py-2", "text-sm", "font-semibold", "text-slate-700", "dark:text-slate-200", "hover:bg-slate-50", "dark:hover:bg-slate-700", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "class", "h-4 w-4 text-emerald-600", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4", "text-emerald-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], [1, "absolute", "-right-1", "-top-1", "inline-flex", "min-w-[18px]", "items-center", "justify-center", "rounded-full", "bg-[#B81104]", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "leading-none", "text-white"], [1, "absolute", "right-0", "z-50", "mt-2", "w-80", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-3", "shadow-lg", "ring-1", "ring-slate-200", "dark:ring-slate-700"], [1, "text-sm", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-1", "text-xs", "text-slate-600", "dark:text-slate-400"], [1, "mt-3", "rounded-xl", "bg-slate-50", "dark:bg-slate-700", "p-3", "text-sm", "text-slate-700", "dark:text-slate-200"], [1, "font-semibold"], ["routerLink", "/expiry-alerts", 1, "mt-3", "block", "rounded-xl", "bg-pink-500", "px-3", "py-2", "text-center", "text-sm", "font-semibold", "text-white", "hover:bg-pink-600", 3, "click"], [1, "flex", "items-center"], ["class", "inline-flex items-center gap-1.5 rounded-xl bg-teal-50 dark:bg-teal-900/40 px-3 py-2 text-xs font-bold text-teal-700 dark:text-teal-300 ring-1 ring-teal-200 dark:ring-teal-700", 3, "title", 4, "ngIf"], ["class", "relative", 3, "click", 4, "ngIf"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-xl", "bg-teal-50", "dark:bg-teal-900/40", "px-3", "py-2", "text-xs", "font-bold", "text-teal-700", "dark:text-teal-300", "ring-1", "ring-teal-200", "dark:ring-teal-700", 3, "title"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 21v-6h6v6"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "rounded-xl", "px-3", "py-2", "text-sm", "font-semibold", "text-slate-700", "dark:text-slate-200", "hover:bg-slate-100", "dark:hover:bg-slate-700", 3, "click", "aria-label"], ["class", "absolute right-0 z-50 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-800 p-2 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700", 4, "ngIf"], [1, "absolute", "right-0", "z-50", "mt-2", "w-56", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-2", "shadow-lg", "ring-1", "ring-slate-200", "dark:ring-slate-700"], [1, "absolute", "right-0", "z-50", "mt-2", "w-64", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-2", "shadow-lg", "ring-1", "ring-slate-200", "dark:ring-slate-700"], [1, "px-3", "py-2"], [1, "text-xs", "text-slate-600", "dark:text-slate-400"], [1, "my-1", "h-px", "bg-slate-100", "dark:bg-slate-700"], ["type", "button", 1, "flex", "w-full", "items-center", "gap-2", "rounded-xl", "px-3", "py-2", "text-left", "text-sm", "font-semibold", "text-slate-700", "dark:text-slate-200", "hover:bg-slate-50", "dark:hover:bg-slate-700", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4", "text-slate-500", "dark:text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 19v-1a6 6 0 0112 0v1"], ["type", "button", "class", "flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700", 3, "click", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10 16l4-4-4-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14 12H3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 19V5a2 2 0 00-2-2h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 14h.01"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"]], template: function ShellHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0);
      \u0275\u0275template(1, ShellHeaderComponent_button_1_Template, 3, 1, "button", 1);
      \u0275\u0275elementStart(2, "a", 2);
      \u0275\u0275text(3, "NABOO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
      \u0275\u0275listener("click", function ShellHeaderComponent_Template_div_click_5_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function ShellHeaderComponent_Template_button_click_6_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275template(7, ShellHeaderComponent__svg_svg_7_Template, 2, 0, "svg", 6)(8, ShellHeaderComponent__svg_svg_8_Template, 2, 0, "svg", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275listener("click", function ShellHeaderComponent_Template_div_click_9_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(10, "button", 8);
      \u0275\u0275listener("click", function ShellHeaderComponent_Template_button_click_10_listener() {
        return ctx.toggleFullscreen();
      });
      \u0275\u0275template(11, ShellHeaderComponent__svg_svg_11_Template, 2, 0, "svg", 6)(12, ShellHeaderComponent__svg_svg_12_Template, 2, 0, "svg", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 4);
      \u0275\u0275listener("click", function ShellHeaderComponent_Template_div_click_13_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(14, "button", 9);
      \u0275\u0275listener("click", function ShellHeaderComponent_Template_button_click_14_listener() {
        return ctx.onToggleLangMenu();
      });
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "uppercase");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 10);
      \u0275\u0275element(19, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(20, ShellHeaderComponent_div_20_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 4);
      \u0275\u0275listener("click", function ShellHeaderComponent_Template_div_click_21_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(22, "button", 13);
      \u0275\u0275listener("click", function ShellHeaderComponent_Template_button_click_22_listener() {
        return ctx.onToggleNotifications();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 14);
      \u0275\u0275element(24, "path", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, ShellHeaderComponent_span_25_Template, 2, 1, "span", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, ShellHeaderComponent_div_26_Template, 15, 13, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, ShellHeaderComponent_div_27_Template, 3, 2, "div", 18);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "div", 4);
      \u0275\u0275listener("click", function ShellHeaderComponent_Template_div_click_28_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(29, "button", 19);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275listener("click", function ShellHeaderComponent_Template_button_click_29_listener() {
        return ctx.onToggleUserMenu();
      });
      \u0275\u0275elementStart(31, "div", 20);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(33, ShellHeaderComponent_div_33_Template, 22, 11, "div", 21);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSidebarToggle);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.isDark());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isDark());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.isFullscreen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFullscreen());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, ctx.currentLang()));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.langMenuOpen);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.notificationsCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.notificationsOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAuthed && ctx.branchCtx.loaded());
      \u0275\u0275advance(2);
      \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate((ctx.user == null ? null : ctx.user.name) || \u0275\u0275pipeBind1(30, 16, "header.user")));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", (ctx.user == null ? null : ctx.user.name == null ? null : ctx.user.name.slice(0, 1)) || "U", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.userMenuOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, UpperCasePipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShellHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-shell-header", standalone: true, imports: [CommonModule, RouterLink, TranslatePipe], template: `<header class="relative z-40 mb-4 flex flex-wrap items-center gap-1 rounded-2xl bg-white dark:bg-slate-800 px-2 py-3 sm:gap-3 sm:px-4 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">\r
  <button\r
    *ngIf="showSidebarToggle"\r
    type="button"\r
    (click)="$event.stopPropagation(); onToggleSidebar()"\r
    class="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"\r
    aria-label="Toggle navigation"\r
    aria-controls="main-sidebar"\r
    [attr.aria-expanded]="sidebarOpen"\r
  >\r
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">\r
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />\r
    </svg>\r
  </button>\r
\r
  <a routerLink="/home" class="text-sm font-bold text-primary-800 dark:text-primary-200 md:hidden">NABOO</a>\r
\r
  <div class="ml-auto flex items-center justify-end gap-1 sm:gap-3">\r
    <div class="relative" (click)="$event.stopPropagation()">\r
      <button\r
        type="button"\r
        (click)="toggleTheme()"\r
        class="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"\r
        aria-label="Toggle theme"\r
      >\r
        <svg *ngIf="!isDark()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />\r
        </svg>\r
        <svg *ngIf="isDark()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <div class="relative hidden md:block" (click)="$event.stopPropagation()">\r
      <button\r
        type="button"\r
        (click)="toggleFullscreen()"\r
        class="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"\r
        aria-label="Toggle fullscreen"\r
      >\r
        <svg *ngIf="!isFullscreen()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />\r
        </svg>\r
        <svg *ngIf="isFullscreen()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <div class="relative" (click)="$event.stopPropagation()">\r
      <button\r
        type="button"\r
        (click)="onToggleLangMenu()"\r
        class="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"\r
      >\r
        <span>{{ currentLang() | uppercase }}</span>\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />\r
        </svg>\r
      </button>\r
\r
      <div *ngIf="langMenuOpen" class="absolute right-0 z-50 mt-2 w-32 rounded-2xl bg-white dark:bg-slate-800 p-2 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">\r
        <button\r
          *ngFor="let lang of availableLangs"\r
          type="button"\r
          (click)="$event.stopPropagation(); setLang(lang)"\r
          class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"\r
          [class.bg-slate-100]="currentLang() === lang"\r
          [class.dark:bg-slate-700]="currentLang() === lang"\r
        >\r
          <span>{{ lang | uppercase }}</span>\r
          <svg *ngIf="currentLang() === lang" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-emerald-600">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <div class="relative" (click)="$event.stopPropagation()">\r
      <button\r
        type="button"\r
        (click)="onToggleNotifications()"\r
        class="relative inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"\r
        aria-label="Notifications"\r
      >\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">\r
          <path\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"\r
          />\r
        </svg>\r
\r
        <span\r
          *ngIf="notificationsCount > 0"\r
          class="absolute -right-1 -top-1 inline-flex min-w-[18px] items-center justify-center rounded-full bg-[#B81104] px-1.5 py-0.5 text-[10px] font-bold leading-none text-white"\r
        >\r
          {{ notificationsCount }}\r
        </span>\r
      </button>\r
\r
      <div\r
        *ngIf="notificationsOpen"\r
        class="absolute right-0 z-50 mt-2 w-80 rounded-2xl bg-white dark:bg-slate-800 p-3 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700"\r
      >\r
        <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ 'header.notifications' | translate }}</div>\r
        <div class="mt-1 text-xs text-slate-600 dark:text-slate-400">\r
          {{ 'header.notificationsHelp' | translate }}\r
        </div>\r
        <div class="mt-3 rounded-xl bg-slate-50 dark:bg-slate-700 p-3 text-sm text-slate-700 dark:text-slate-200">\r
          {{ 'header.total' | translate }}: <span class="font-semibold">{{ notificationsCount }}</span>\r
        </div>\r
        <a\r
          routerLink="/expiry-alerts"\r
          class="mt-3 block rounded-xl bg-pink-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-pink-600"\r
          (click)="onCloseMenus()"\r
          >{{ 'header.viewAlerts' | translate }}</a>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="isAuthed && branchCtx.loaded()" class="flex items-center">\r
      <span\r
        *ngIf="branchCtx.locked()"\r
        class="inline-flex items-center gap-1.5 rounded-xl bg-teal-50 dark:bg-teal-900/40 px-3 py-2 text-xs font-bold text-teal-700 dark:text-teal-300 ring-1 ring-teal-200 dark:ring-teal-700"\r
        title="{{ 'common.branch' | translate }}"\r
      >\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">\r
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 21v-6h6v6" />\r
        </svg>\r
        {{ branchCtx.me()?.branchName || branchCtx.lockedCode() }}\r
      </span>\r
\r
      <div *ngIf="!branchCtx.locked() && branchCtx.options().length" class="relative" (click)="$event.stopPropagation()">\r
        <button\r
          type="button"\r
          (click)="onToggleBranchMenu()"\r
          class="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"\r
          aria-label="{{ 'common.branch' | translate }}"\r
        >\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 21v-6h6v6" />\r
          </svg>\r
          <!-- <span>{{ branchCtx.selected() || ('common.all' | translate) }}</span> -->\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />\r
          </svg>\r
        </button>\r
\r
        <div *ngIf="branchMenuOpen" class="absolute right-0 z-50 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-800 p-2 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">\r
          <button\r
            type="button"\r
            (click)="$event.stopPropagation(); selectBranch(null)"\r
            class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"\r
            [class.bg-slate-100]="branchCtx.selected() == null"\r
            [class.dark:bg-slate-700]="branchCtx.selected() == null"\r
          >\r
            <span>{{ 'common.allBranches' | translate }}</span>\r
            <svg *ngIf="branchCtx.selected() == null" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-emerald-600">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />\r
            </svg>\r
          </button>\r
          <button\r
            *ngFor="let b of branchCtx.options()"\r
            type="button"\r
            (click)="$event.stopPropagation(); selectBranch(b.code)"\r
            class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"\r
            [class.bg-slate-100]="branchCtx.selected() === b.code"\r
            [class.dark:bg-slate-700]="branchCtx.selected() === b.code"\r
          >\r
            <span>{{ b.name }} ({{ b.code }})</span>\r
            <svg *ngIf="branchCtx.selected() === b.code" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-emerald-600">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />\r
            </svg>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="relative" (click)="$event.stopPropagation()">\r
      <button\r
        type="button"\r
        (click)="onToggleUserMenu()"\r
        class="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"\r
        aria-label="{{ user?.name || ('header.user' | translate) }}"\r
      >\r
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500 text-sm font-bold text-white">\r
          {{ (user?.name?.slice(0, 1) || 'U') }}\r
        </div>\r
      </button>\r
\r
      <div\r
        *ngIf="userMenuOpen"\r
        class="absolute right-0 z-50 mt-2 w-64 rounded-2xl bg-white dark:bg-slate-800 p-2 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700"\r
      >\r
        <div class="px-3 py-2">\r
          <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ user?.name || ('header.user' | translate) }}</div>\r
          <div class="text-xs text-slate-600 dark:text-slate-400">{{ user?.email || '' }}</div>\r
        </div>\r
        <div class="my-1 h-px bg-slate-100 dark:bg-slate-700"></div>\r
\r
        <button\r
          type="button"\r
          class="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"\r
          (click)="onCloseMenus(); onChangePassword()"\r
        >\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-slate-500 dark:text-slate-400">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 19v-1a6 6 0 0112 0v1" />\r
          </svg>\r
          {{ 'header.changePassword' | translate }}\r
        </button>\r
\r
        <button\r
          *ngIf="user?.roles?.includes('ADMIN')"\r
          type="button"\r
          class="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"\r
          (click)="onCloseMenus(); onResetUserPassword()"\r
        >\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-slate-500 dark:text-slate-400">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v4" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14h.01" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />\r
          </svg>\r
          {{ 'header.resetUserPassword' | translate }}\r
        </button>\r
\r
        <button\r
          type="button"\r
          class="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"\r
          (click)="onCloseMenus(); onLogout()"\r
        >\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-slate-500 dark:text-slate-400">\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 16l4-4-4-4" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 12H3" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 19V5a2 2 0 00-2-2h-6" />\r
          </svg>\r
          {{ 'header.logout' | translate }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</header>\r
` }]
  }], null, { user: [{
    type: Input,
    args: [{ required: true }]
  }], isAuthed: [{
    type: Input,
    args: [{ required: true }]
  }], showSidebarToggle: [{
    type: Input,
    args: [{ required: true }]
  }], sidebarOpen: [{
    type: Input,
    args: [{ required: true }]
  }], notificationsCount: [{
    type: Input,
    args: [{ required: true }]
  }], notificationsOpen: [{
    type: Input,
    args: [{ required: true }]
  }], userMenuOpen: [{
    type: Input,
    args: [{ required: true }]
  }], langMenuOpen: [{
    type: Input,
    args: [{ required: true }]
  }], branchMenuOpen: [{
    type: Input,
    args: [{ required: true }]
  }], toggleNotifications: [{
    type: Output
  }], toggleUserMenu: [{
    type: Output
  }], closeMenus: [{
    type: Output
  }], changePassword: [{
    type: Output
  }], resetUserPassword: [{
    type: Output
  }], logout: [{
    type: Output
  }], toggleSidebar: [{
    type: Output
  }], toggleLangMenu: [{
    type: Output
  }], toggleBranchMenu: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellHeaderComponent, { className: "ShellHeaderComponent", filePath: "app/features/shell/shell-header.component.ts", lineNumber: 22 });
})();

// src/app/shared/ui/table/table-shell.component.ts
var _c02 = [[["", "actions", ""]], "*"];
var _c12 = ["[actions]", "*"];
function TableShellComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function TableShellComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
function TableShellComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div");
    \u0275\u0275template(2, TableShellComponent_div_1_div_2_Template, 2, 1, "div", 6)(3, TableShellComponent_div_1_div_3_Template, 2, 1, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.subtitle);
  }
}
function TableShellComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementContainerEnd();
  }
}
function TableShellComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emptyMessage);
  }
}
var ResponsiveTablesDirective = class _ResponsiveTablesDirective {
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
  static \u0275fac = function ResponsiveTablesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResponsiveTablesDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ResponsiveTablesDirective, selectors: [["", "cisResponsiveTables", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResponsiveTablesDirective, [{
    type: Directive,
    args: [{
      selector: "[cisResponsiveTables]",
      standalone: true
    }]
  }], null, null);
})();
var TableShellComponent = class _TableShellComponent {
  title = null;
  subtitle = null;
  empty = false;
  emptyMessage = "No data";
  static \u0275fac = function TableShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableShellComponent, selectors: [["cis-table-shell"]], inputs: { title: "title", subtitle: "subtitle", empty: "empty", emptyMessage: "emptyMessage" }, features: [\u0275\u0275HostDirectivesFeature([ResponsiveTablesDirective])], ngContentSelectors: _c12, decls: 6, vars: 4, consts: [["emptyState", ""], [1, "cis-table-surface", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], ["class", "flex flex-wrap items-start justify-between gap-3", 4, "ngIf"], [1, "cis-table-content", 3, "ngClass"], [4, "ngIf", "ngIfElse"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], ["class", "text-base font-semibold text-slate-900", 4, "ngIf"], ["class", "mt-1 text-xs text-slate-500", 4, "ngIf"], [1, "text-base", "font-semibold", "text-slate-900"], [1, "mt-1", "text-xs", "text-slate-500"], [1, "rounded-xl", "bg-slate-50", "p-4", "text-sm", "text-slate-600", "ring-1", "ring-slate-100"]], template: function TableShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, TableShellComponent_div_1_Template, 5, 2, "div", 2);
      \u0275\u0275elementStart(2, "div", 3);
      \u0275\u0275template(3, TableShellComponent_ng_container_3_Template, 2, 0, "ng-container", 4)(4, TableShellComponent_ng_template_4_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const emptyState_r2 = \u0275\u0275reference(5);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.title || ctx.subtitle);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.title || ctx.subtitle ? "mt-3" : "");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.empty)("ngIfElse", emptyState_r2);
    }
  }, dependencies: [CommonModule, NgClass, NgIf], styles: ["\n\n[_nghost-%COMP%], \n.cis-table-surface[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n.cis-table-content[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n@media (max-width: 767px) {\n  .cis-table-surface[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=table-shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableShellComponent, [{
    type: Component,
    args: [{ selector: "cis-table-shell", standalone: true, imports: [CommonModule], hostDirectives: [ResponsiveTablesDirective], template: `<div class="cis-table-surface rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
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
`, styles: ["/* src/app/shared/ui/table/table-shell.component.scss */\n:host,\n.cis-table-surface {\n  display: block;\n  min-width: 0;\n}\n.cis-table-content {\n  overflow-x: auto;\n}\n@media (max-width: 767px) {\n  .cis-table-surface {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=table-shell.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], empty: [{
    type: Input
  }], emptyMessage: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableShellComponent, { className: "TableShellComponent", filePath: "app/shared/ui/table/table-shell.component.ts", lineNumber: 69 });
})();

// src/app/features/shell/shell.layout.ts
var _c03 = (a0) => ({ "md:grid-cols-[260px_1fr]": a0 });
var _c13 = () => ({ exact: true });
var _c2 = (a0, a1, a2) => ({ "fixed inset-y-0 left-0 w-[260px] transform transition-transform duration-200 ease-out": true, "md:hidden": a0, "-translate-x-full": a1, "translate-x-0": a2 });
var _c3 = (a0) => ({ "cis-nav-active": a0 });
var _c4 = (a0) => ({ "rotate-90": a0 });
function ShellLayout_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function ShellLayout_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
function ShellLayout_aside_3_a_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 55)(1, "span", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 56);
    \u0275\u0275element(3, "path", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "nav.counter"));
  }
}
function ShellLayout_aside_3_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleProducts());
    });
    \u0275\u0275elementEnd();
  }
}
function ShellLayout_aside_3_div_31_a_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 72);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "nav.overview"));
  }
}
function ShellLayout_aside_3_div_31_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 73);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_31_a_7_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleProducts());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 74);
    \u0275\u0275element(2, "path", 38)(3, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "nav.products"));
  }
}
function ShellLayout_aside_3_div_31_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 75);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_31_a_8_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleProducts());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 76);
    \u0275\u0275element(2, "path", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "nav.categories"));
  }
}
function ShellLayout_aside_3_div_31_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 78);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_31_a_9_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleProducts());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 79);
    \u0275\u0275element(2, "path", 80)(3, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "nav.stockMovements"));
  }
}
function ShellLayout_aside_3_div_31_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 82);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_31_a_10_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleProducts());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 83);
    \u0275\u0275element(2, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "nav.transfers"));
  }
}
function ShellLayout_aside_3_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_31_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 60)(2, "div", 61);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 62);
    \u0275\u0275template(6, ShellLayout_aside_3_div_31_a_6_Template, 3, 3, "a", 63)(7, ShellLayout_aside_3_div_31_a_7_Template, 7, 5, "a", 64)(8, ShellLayout_aside_3_div_31_a_8_Template, 6, 5, "a", 65)(9, ShellLayout_aside_3_div_31_a_9_Template, 7, 5, "a", 66)(10, ShellLayout_aside_3_div_31_a_10_Template, 6, 5, "a", 67);
    \u0275\u0275elementStart(11, "a", 68);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_31_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleProducts());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 69);
    \u0275\u0275element(13, "path", 70)(14, "path", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "nav.productDashboard"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isMobile());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canView("PRODUCTS"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canView("CATEGORIES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canView("STOCK_MOVEMENTS"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canView("TRANSFERS"));
    \u0275\u0275advance();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(12, _c13));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "nav.expiryAlerts"));
  }
}
function ShellLayout_aside_3_a_32_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pendingReceivingCount());
  }
}
function ShellLayout_aside_3_a_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 85)(1, "span", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 32);
    \u0275\u0275element(3, "path", 86)(4, "path", 87)(5, "path", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ShellLayout_aside_3_a_32_span_6_Template, 2, 1, "span", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c13));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.pendingReceivingCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 3, "nav.inventory"));
  }
}
function ShellLayout_aside_3_a_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 91)(1, "span", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 32);
    \u0275\u0275element(3, "path", 92)(4, "path", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, "nav.purchasing"));
  }
}
function ShellLayout_aside_3_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_46_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSales());
    });
    \u0275\u0275elementEnd();
  }
}
function ShellLayout_aside_3_div_47_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 96);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_47_a_6_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSales());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 76);
    \u0275\u0275element(2, "path", 47)(3, "path", 48)(4, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, "nav.sales"));
  }
}
function ShellLayout_aside_3_div_47_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 97);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_47_a_7_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSales());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 74);
    \u0275\u0275element(2, "path", 98)(3, "path", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "nav.mySales"));
  }
}
function ShellLayout_aside_3_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_47_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 60)(2, "div", 61);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 62);
    \u0275\u0275template(6, ShellLayout_aside_3_div_47_a_6_Template, 8, 5, "a", 94)(7, ShellLayout_aside_3_div_47_a_7_Template, 7, 5, "a", 95);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "nav.sales"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.canView("SALES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canView("MY_SALES"));
  }
}
function ShellLayout_aside_3_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_60_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFinance());
    });
    \u0275\u0275elementEnd();
  }
}
function ShellLayout_aside_3_div_61_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 103);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_61_a_6_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleFinance());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 76);
    \u0275\u0275element(2, "path", 47)(3, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "nav.expenses"));
  }
}
function ShellLayout_aside_3_div_61_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 104);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_61_a_7_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleFinance());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 69);
    \u0275\u0275element(2, "path", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "nav.expenseCategories"));
  }
}
function ShellLayout_aside_3_div_61_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 105);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_61_a_8_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleFinance());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 74);
    \u0275\u0275element(2, "path", 106)(3, "path", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "nav.profitManagement"));
  }
}
function ShellLayout_aside_3_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function ShellLayout_aside_3_div_61_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 60)(2, "div", 61);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 62);
    \u0275\u0275template(6, ShellLayout_aside_3_div_61_a_6_Template, 7, 5, "a", 100)(7, ShellLayout_aside_3_div_61_a_7_Template, 6, 5, "a", 101)(8, ShellLayout_aside_3_div_61_a_8_Template, 7, 5, "a", 102);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "nav.finance"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.canView("EXPENSES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canView("EXPENSE_CATEGORIES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canView("PROFIT_MANAGEMENT"));
  }
}
function ShellLayout_aside_3_a_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 108)(1, "span", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 32);
    \u0275\u0275element(3, "path", 106)(4, "path", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, "nav.reports"));
  }
}
function ShellLayout_aside_3_a_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 109)(1, "span", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 32);
    \u0275\u0275element(3, "path", 110)(4, "path", 111)(5, "path", 112)(6, "path", 113)(7, "path", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 2, "nav.usersRoles"));
  }
}
function ShellLayout_aside_3_a_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 115)(1, "span", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 32);
    \u0275\u0275element(3, "path", 116)(4, "path", 117)(5, "path", 118);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c13));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 2, "nav.branches"));
  }
}
function ShellLayout_aside_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 20)(1, "button", 21);
    \u0275\u0275listener("click", function ShellLayout_aside_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 24)(5, "a", 25);
    \u0275\u0275element(6, "img", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 27);
    \u0275\u0275text(8, "Sales & Management System");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "hr", 28);
    \u0275\u0275elementStart(10, "nav", 29)(11, "a", 30)(12, "span", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 32);
    \u0275\u0275element(14, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ShellLayout_aside_3_a_18_Template, 7, 3, "a", 34);
    \u0275\u0275elementStart(19, "div", 35)(20, "a", 36);
    \u0275\u0275listener("keydown.enter", function ShellLayout_aside_3_Template_a_keydown_enter_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isMobile() && ctx_r1.toggleProducts());
    })("click", function ShellLayout_aside_3_Template_a_click_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.toggleProducts();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(21, "span", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 32);
    \u0275\u0275element(23, "path", 38)(24, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 40);
    \u0275\u0275element(29, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, ShellLayout_aside_3_div_30_Template, 1, 0, "div", 42)(31, ShellLayout_aside_3_div_31_Template, 18, 13, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, ShellLayout_aside_3_a_32_Template, 10, 6, "a", 44)(33, ShellLayout_aside_3_a_33_Template, 8, 5, "a", 45);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "div", 35)(35, "button", 46);
    \u0275\u0275listener("click", function ShellLayout_aside_3_Template_button_click_35_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.toggleSales();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(36, "span", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 32);
    \u0275\u0275element(38, "path", 47)(39, "path", 48)(40, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 40);
    \u0275\u0275element(45, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, ShellLayout_aside_3_div_46_Template, 1, 0, "div", 42)(47, ShellLayout_aside_3_div_47_Template, 8, 5, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "div", 35)(49, "button", 46);
    \u0275\u0275listener("click", function ShellLayout_aside_3_Template_button_click_49_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.toggleFinance();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(50, "span", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(51, "svg", 32);
    \u0275\u0275element(52, "path", 47)(53, "path", 48)(54, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 40);
    \u0275\u0275element(59, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, ShellLayout_aside_3_div_60_Template, 1, 0, "div", 42)(61, ShellLayout_aside_3_div_61_Template, 9, 6, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, ShellLayout_aside_3_a_62_Template, 8, 5, "a", 50)(63, ShellLayout_aside_3_a_63_Template, 11, 5, "a", 51)(64, ShellLayout_aside_3_a_64_Template, 9, 5, "a", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "div", 53)(66, "div", 54);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("cis-sidebar-open", ctx_r1.isMobile() && ctx_r1.sidebarOpen());
    \u0275\u0275property("cdkTrapFocus", ctx_r1.isMobile() && ctx_r1.sidebarOpen())("cdkTrapFocusAutoCapture", ctx_r1.isMobile() && ctx_r1.sidebarOpen())("ngClass", \u0275\u0275pureFunction3(47, _c2, !ctx_r1.sidebarOpen(), !ctx_r1.sidebarOpen(), ctx_r1.sidebarOpen()));
    \u0275\u0275attribute("role", ctx_r1.isMobile() ? "dialog" : null)("aria-modal", ctx_r1.isMobile() && ctx_r1.sidebarOpen() ? true : null)("inert", ctx_r1.isMobile() && !ctx_r1.sidebarOpen() ? "" : null);
    \u0275\u0275advance(11);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(51, _c13));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 37, "nav.dashboard"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canView("SALES") || ctx_r1.canView("EXPENSES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.isMobile() ? null : "/product-dashboard")("ngClass", \u0275\u0275pureFunction1(52, _c3, ctx_r1.isProductsSection() || ctx_r1.productsExpanded()));
    \u0275\u0275attribute("role", ctx_r1.isMobile() ? "button" : null)("tabindex", ctx_r1.isMobile() ? 0 : null)("aria-expanded", ctx_r1.productsExpanded());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 39, "nav.productDashboard"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(54, _c4, ctx_r1.productsExpanded()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.productsExpanded());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.productsExpanded());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canView("INVENTORY"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canView("PURCHASING"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(56, _c3, ctx_r1.isSalesSection() || ctx_r1.salesExpanded()));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 41, "nav.sales"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(58, _c4, ctx_r1.salesExpanded()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.salesExpanded());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.salesExpanded());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(60, _c3, ctx_r1.isFinanceSection() || ctx_r1.financeExpanded()));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 43, "nav.finance"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(62, _c4, ctx_r1.financeExpanded()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.financeExpanded());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.financeExpanded());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canView("REPORTS"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canView("USERS_ROLES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canView("BRANCHES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" \xA9 ", ctx_r1.currentYear, " ", \u0275\u0275pipeBind1(68, 45, "common.footer"), " ");
  }
}
function ShellLayout_footer_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 119);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \xA9 ", ctx_r1.currentYear, " ", \u0275\u0275pipeBind1(2, 2, "common.footer"), " ");
  }
}
function ShellLayout_a_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 120);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "path", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "nav.counter"));
  }
}
function ShellLayout_div_30_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.changePasswordError());
  }
}
function ShellLayout_div_30_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.changePasswordSuccess());
  }
}
function ShellLayout_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122);
    \u0275\u0275listener("click", function ShellLayout_div_30_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeChangePassword());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 123)(3, "div", 124);
    \u0275\u0275listener("click", function ShellLayout_div_30_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r19);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 125);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 126);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 127)(11, "label", 128);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "input", 129);
    \u0275\u0275listener("input", function ShellLayout_div_30_Template_input_input_14_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePasswordCurrent.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "label", 128);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "input", 129);
    \u0275\u0275listener("input", function ShellLayout_div_30_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePasswordNew.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, ShellLayout_div_30_div_19_Template, 2, 1, "div", 130)(20, ShellLayout_div_30_div_20_Template, 2, 1, "div", 131);
    \u0275\u0275elementStart(21, "div", 132)(22, "button", 133);
    \u0275\u0275listener("click", function ShellLayout_div_30_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeChangePassword());
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 134);
    \u0275\u0275listener("click", function ShellLayout_div_30_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitChangePassword());
    });
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "modal.changePassword.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, "modal.changePassword.help"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 15, "modal.changePassword.currentPassword"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.changePasswordCurrent());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 17, "modal.changePassword.newPassword"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.changePasswordNew());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.changePasswordError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.changePasswordSuccess());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 19, "common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.changePasswordLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 21, "modal.changePassword.update"), " ");
  }
}
function ShellLayout_div_31_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r21 = ctx.$implicit;
    \u0275\u0275property("value", u_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", u_r21.name, " (", u_r21.email, ")");
  }
}
function ShellLayout_div_31_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.resetUserPasswordError());
  }
}
function ShellLayout_div_31_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.resetUserPasswordSuccess());
  }
}
function ShellLayout_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122);
    \u0275\u0275listener("click", function ShellLayout_div_31_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeResetUserPassword());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 123)(3, "div", 137);
    \u0275\u0275listener("click", function ShellLayout_div_31_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 125);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 126);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 127)(11, "label", 128);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "select", 138);
    \u0275\u0275listener("change", function ShellLayout_div_31_Template_select_change_14_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetUserId.set($event.target.value));
    });
    \u0275\u0275elementStart(15, "option", 139);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ShellLayout_div_31_option_18_Template, 2, 3, "option", 140);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 128);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "input", 129);
    \u0275\u0275listener("input", function ShellLayout_div_31_Template_input_input_22_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetNewPassword.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, ShellLayout_div_31_div_23_Template, 2, 1, "div", 130)(24, ShellLayout_div_31_div_24_Template, 2, 1, "div", 131);
    \u0275\u0275elementStart(25, "div", 132)(26, "button", 133);
    \u0275\u0275listener("click", function ShellLayout_div_31_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeResetUserPassword());
    });
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 134);
    \u0275\u0275listener("click", function ShellLayout_div_31_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitResetUserPassword());
    });
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, "modal.resetPassword.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 15, "modal.resetPassword.help"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 17, "modal.resetPassword.user"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.resetUserId());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "modal.resetPassword.selectUser"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.adminUsers());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 21, "modal.resetPassword.newPassword"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.resetNewPassword());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resetUserPasswordError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resetUserPasswordSuccess());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 23, "common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.resetUserPasswordLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 25, "modal.resetPassword.reset"), " ");
  }
}
var ShellLayout = class _ShellLayout {
  auth;
  gql;
  router;
  destroyRef;
  isAuthed = computed(() => this.auth.isAuthenticated(), ...ngDevMode ? [{ debugName: "isAuthed" }] : []);
  currentUrl = signal("/", ...ngDevMode ? [{ debugName: "currentUrl" }] : []);
  isHome = computed(() => this.currentUrl() === "/home" || this.currentUrl().startsWith("/home?"), ...ngDevMode ? [{ debugName: "isHome" }] : []);
  sidebarOpen = signal(true, ...ngDevMode ? [{ debugName: "sidebarOpen" }] : []);
  isMobile = signal(false, ...ngDevMode ? [{ debugName: "isMobile" }] : []);
  productsExpanded = signal(false, ...ngDevMode ? [{ debugName: "productsExpanded" }] : []);
  isProductsSection = computed(() => {
    const url = this.currentUrl();
    return url.startsWith("/product-dashboard") || url.startsWith("/products") || url.startsWith("/categories") || url.startsWith("/stock-movements") || url.startsWith("/transfers") || url.startsWith("/expiry-alerts");
  }, ...ngDevMode ? [{ debugName: "isProductsSection" }] : []);
  salesExpanded = signal(false, ...ngDevMode ? [{ debugName: "salesExpanded" }] : []);
  isSalesSection = computed(() => {
    const url = this.currentUrl();
    return url.startsWith("/sales") || url.startsWith("/my-sales");
  }, ...ngDevMode ? [{ debugName: "isSalesSection" }] : []);
  financeExpanded = signal(false, ...ngDevMode ? [{ debugName: "financeExpanded" }] : []);
  isFinanceSection = computed(() => {
    const url = this.currentUrl();
    return url.startsWith("/expenses") || url.startsWith("/expense-categories") || url.startsWith("/profit-management");
  }, ...ngDevMode ? [{ debugName: "isFinanceSection" }] : []);
  user = signal(null, ...ngDevMode ? [{ debugName: "user" }] : []);
  userMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "userMenuOpen" }] : []);
  notificationsOpen = signal(false, ...ngDevMode ? [{ debugName: "notificationsOpen" }] : []);
  notificationsCount = signal(0, ...ngDevMode ? [{ debugName: "notificationsCount" }] : []);
  pendingReceiving = inject(PendingReceivingService);
  branchCtx = inject(BranchContext);
  pendingReceivingCount = this.pendingReceiving.count;
  langMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "langMenuOpen" }] : []);
  branchMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "branchMenuOpen" }] : []);
  myPermissions = signal([], ...ngDevMode ? [{ debugName: "myPermissions" }] : []);
  changePasswordOpen = signal(false, ...ngDevMode ? [{ debugName: "changePasswordOpen" }] : []);
  changePasswordCurrent = signal("", ...ngDevMode ? [{ debugName: "changePasswordCurrent" }] : []);
  changePasswordNew = signal("", ...ngDevMode ? [{ debugName: "changePasswordNew" }] : []);
  changePasswordLoading = signal(false, ...ngDevMode ? [{ debugName: "changePasswordLoading" }] : []);
  changePasswordError = signal(null, ...ngDevMode ? [{ debugName: "changePasswordError" }] : []);
  changePasswordSuccess = signal(null, ...ngDevMode ? [{ debugName: "changePasswordSuccess" }] : []);
  resetUserPasswordOpen = signal(false, ...ngDevMode ? [{ debugName: "resetUserPasswordOpen" }] : []);
  resetUserPasswordLoading = signal(false, ...ngDevMode ? [{ debugName: "resetUserPasswordLoading" }] : []);
  resetUserPasswordError = signal(null, ...ngDevMode ? [{ debugName: "resetUserPasswordError" }] : []);
  resetUserPasswordSuccess = signal(null, ...ngDevMode ? [{ debugName: "resetUserPasswordSuccess" }] : []);
  resetUserId = signal("", ...ngDevMode ? [{ debugName: "resetUserId" }] : []);
  resetNewPassword = signal("", ...ngDevMode ? [{ debugName: "resetNewPassword" }] : []);
  adminUsers = signal([], ...ngDevMode ? [{ debugName: "adminUsers" }] : []);
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  constructor(auth, gql, router, destroyRef) {
    this.auth = auth;
    this.gql = gql;
    this.router = router;
    this.destroyRef = destroyRef;
    if (typeof window !== "undefined") {
      const viewport = window.matchMedia("(max-width: 767px)");
      const updateViewport = () => {
        this.isMobile.set(viewport.matches);
        this.sidebarOpen.set(!viewport.matches);
        this.closeSections();
      };
      updateViewport();
      viewport.addEventListener("change", updateViewport);
      this.destroyRef.onDestroy(() => viewport.removeEventListener("change", updateViewport));
    }
    this.currentUrl.set(this.router.url);
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentUrl.set(e.urlAfterRedirects);
        this.closeMenus();
        this.closeSections();
        if (this.isMobile())
          this.closeSidebar();
        if (this.isAuthed())
          this.loadPendingReceiving();
      }
    });
    if (this.isAuthed()) {
      this.loadMe();
      this.loadMyPermissions();
      this.loadPendingReceiving();
      this.refreshNotifications();
      this.branchCtx.load();
    }
  }
  loadMe() {
    const query = `query Me { me { id name email roles } }`;
    this.gql.request(query).subscribe({
      next: (res) => {
        this.user.set(res.me);
      },
      error: () => {
        this.user.set(null);
      }
    });
  }
  loadMyPermissions() {
    const query = `query MyPermissions { myPermissions { module canView canCreate canEdit canDelete } }`;
    this.gql.request(query).subscribe({
      next: (res) => this.myPermissions.set(res.myPermissions ?? []),
      error: () => this.myPermissions.set([])
    });
  }
  canView(module) {
    const u = this.user();
    if (u?.roles?.includes("ADMIN"))
      return true;
    const m = String(module).toUpperCase();
    const p = this.myPermissions().find((x) => String(x.module).toUpperCase() === m);
    return Boolean(p?.canView);
  }
  openChangePassword() {
    this.changePasswordError.set(null);
    this.changePasswordSuccess.set(null);
    this.changePasswordCurrent.set("");
    this.changePasswordNew.set("");
    this.changePasswordOpen.set(true);
  }
  closeChangePassword() {
    this.changePasswordOpen.set(false);
  }
  submitChangePassword() {
    if (!this.changePasswordCurrent().trim() || !this.changePasswordNew().trim())
      return;
    this.changePasswordLoading.set(true);
    this.changePasswordError.set(null);
    this.changePasswordSuccess.set(null);
    const mutation = `mutation ChangeMyPassword($input: ChangeMyPasswordInput!) { changeMyPassword(input: $input) }`;
    this.gql.request(mutation, {
      input: {
        currentPassword: this.changePasswordCurrent(),
        newPassword: this.changePasswordNew()
      }
    }).subscribe({
      next: () => {
        this.changePasswordSuccess.set("Password updated");
        this.changePasswordLoading.set(false);
        this.changePasswordCurrent.set("");
        this.changePasswordNew.set("");
        this.changePasswordOpen.set(false);
      },
      error: (e) => {
        this.changePasswordError.set(e instanceof Error ? e.message : "Failed to update password");
        this.changePasswordLoading.set(false);
      }
    });
  }
  openResetUserPassword() {
    const u = this.user();
    if (!u?.roles?.includes("ADMIN"))
      return;
    this.resetUserPasswordError.set(null);
    this.resetUserPasswordSuccess.set(null);
    this.resetUserId.set("");
    this.resetNewPassword.set("");
    this.resetUserPasswordOpen.set(true);
    const qUsers = `query { users { id name email } }`;
    this.gql.request(qUsers).subscribe({
      next: (res) => this.adminUsers.set(res.users ?? []),
      error: () => this.adminUsers.set([])
    });
  }
  closeResetUserPassword() {
    this.resetUserPasswordOpen.set(false);
  }
  submitResetUserPassword() {
    if (!this.resetUserId().trim() || !this.resetNewPassword().trim())
      return;
    this.resetUserPasswordLoading.set(true);
    this.resetUserPasswordError.set(null);
    this.resetUserPasswordSuccess.set(null);
    const mutation = `mutation ResetUserPassword($input: ResetUserPasswordInput!) {
      resetUserPassword(input: $input) { id }
    }`;
    this.gql.request(mutation, {
      input: {
        userId: this.resetUserId(),
        newPassword: this.resetNewPassword()
      }
    }).subscribe({
      next: () => {
        this.resetUserPasswordSuccess.set("Password reset");
        this.resetUserPasswordLoading.set(false);
        this.resetUserPasswordOpen.set(false);
      },
      error: (e) => {
        this.resetUserPasswordError.set(e instanceof Error ? e.message : "Failed to reset password");
        this.resetUserPasswordLoading.set(false);
      }
    });
  }
  toggleUserMenu() {
    this.userMenuOpen.set(!this.userMenuOpen());
    if (this.userMenuOpen()) {
      this.notificationsOpen.set(false);
      this.langMenuOpen.set(false);
      this.branchMenuOpen.set(false);
    }
  }
  toggleNotifications() {
    this.notificationsOpen.set(!this.notificationsOpen());
    if (this.notificationsOpen()) {
      this.userMenuOpen.set(false);
      this.langMenuOpen.set(false);
      this.branchMenuOpen.set(false);
      this.refreshNotifications();
    }
  }
  closeMenus() {
    this.userMenuOpen.set(false);
    this.notificationsOpen.set(false);
    this.langMenuOpen.set(false);
    this.branchMenuOpen.set(false);
  }
  toggleLangMenu() {
    this.langMenuOpen.set(!this.langMenuOpen());
    if (this.langMenuOpen()) {
      this.userMenuOpen.set(false);
      this.notificationsOpen.set(false);
      this.branchMenuOpen.set(false);
    }
  }
  toggleBranchMenu() {
    this.branchMenuOpen.set(!this.branchMenuOpen());
    if (this.branchMenuOpen()) {
      this.userMenuOpen.set(false);
      this.notificationsOpen.set(false);
      this.langMenuOpen.set(false);
    }
  }
  toggleProducts() {
    this.productsExpanded.set(!this.productsExpanded());
  }
  toggleSales() {
    this.salesExpanded.set(!this.salesExpanded());
  }
  toggleFinance() {
    this.financeExpanded.set(!this.financeExpanded());
  }
  toggleSidebar() {
    this.closeMenus();
    this.sidebarOpen.set(!this.sidebarOpen());
    if (!this.sidebarOpen())
      this.closeSections();
  }
  closeSidebar() {
    this.sidebarOpen.set(false);
    this.closeSections();
  }
  closeSections() {
    this.productsExpanded.set(false);
    this.salesExpanded.set(false);
    this.financeExpanded.set(false);
  }
  onEscape() {
    this.closeMenus();
    this.closeSections();
    if (this.isMobile())
      this.closeSidebar();
  }
  loadPendingReceiving() {
    this.pendingReceiving.refresh();
  }
  refreshNotifications() {
    const expiryQuery = `query Expiry($days: Int!, $branch: String) { expiryAlerts(days: $days, branch: $branch) { productId } }`;
    const lowStockQuery = `query LowStock($threshold: Int!, $branch: String) { lowStockAlerts(threshold: $threshold, branch: $branch) { productId } }`;
    this.gql.request(expiryQuery, { days: 30, branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        const expiryCount = res.expiryAlerts.length;
        this.gql.request(lowStockQuery, { threshold: 10, branch: this.branchCtx.effective() }).subscribe({
          next: (ls) => {
            this.notificationsCount.set(expiryCount + ls.lowStockAlerts.length + this.pendingReceivingCount());
          },
          error: () => {
            this.notificationsCount.set(expiryCount + this.pendingReceivingCount());
          }
        });
      },
      error: () => {
        this.notificationsCount.set(this.pendingReceivingCount());
      }
    });
  }
  logout() {
    this.auth.clear();
    location.href = "/login";
  }
  static \u0275fac = function ShellLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellLayout)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(GraphqlService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DestroyRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellLayout, selectors: [["cis-shell"]], hostBindings: function ShellLayout_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function ShellLayout_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, \u0275\u0275resolveDocument);
    }
  }, features: [\u0275\u0275HostDirectivesFeature([ResponsiveTablesDirective])], decls: 32, vars: 30, consts: [[1, "min-h-screen", "bg-slate-50", "dark:bg-slate-900"], [1, "grid", "min-h-screen", "grid-cols-1", 3, "ngClass"], ["class", "fixed inset-0 z-40 bg-slate-900/40 md:hidden", 3, "click", 4, "ngIf"], ["id", "main-sidebar", "aria-label", "Main navigation", "class", "cis-sidebar z-50 flex flex-col bg-primary-500 dark:bg-primary-900 text-white p-4 md:p-5 md:static md:translate-x-0", 3, "cdkTrapFocus", "cdkTrapFocusAutoCapture", "cis-sidebar-open", "ngClass", 4, "ngIf"], [1, "cis-system", "flex", "min-h-screen", "flex-col", "p-4", "md:p-6", "dark:bg-slate-900", 3, "click"], [3, "toggleSidebar", "toggleNotifications", "toggleUserMenu", "toggleLangMenu", "toggleBranchMenu", "closeMenus", "logout", "changePassword", "resetUserPassword", "user", "isAuthed", "showSidebarToggle", "sidebarOpen", "notificationsCount", "notificationsOpen", "userMenuOpen", "langMenuOpen", "branchMenuOpen"], [1, "flex-1"], ["class", "mt-8 text-center text-xs text-slate-500 dark:text-slate-400", 4, "ngIf"], ["aria-label", "Mobile navigation", 1, "cis-bottom-nav"], ["routerLink", "/home", "routerLinkActive", "cis-bottom-active", "ariaCurrentWhenActive", "page", "aria-label", "Home", 3, "routerLinkActiveOptions"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["d", "m3 10 9-7 9 7v10H3V10Z"], ["d", "M9 20v-7h6v7"], ["routerLink", "/dashboard", "routerLinkActive", "cis-bottom-active", "ariaCurrentWhenActive", "page"], ["d", "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"], ["routerLink", "/counter", "routerLinkActive", "cis-bottom-active", "ariaCurrentWhenActive", "page", 4, "ngIf"], ["type", "button", "aria-controls", "main-sidebar", "aria-label", "Open navigation", 3, "click"], ["d", "M4 6h16M4 12h16M4 18h16"], ["class", "cis-modal-overlay fixed inset-0 z-50", 4, "ngIf"], [1, "fixed", "inset-0", "z-40", "bg-slate-900/40", "md:hidden", 3, "click"], ["id", "main-sidebar", "aria-label", "Main navigation", 1, "cis-sidebar", "z-50", "flex", "flex-col", "bg-primary-500", "dark:bg-primary-900", "text-white", "p-4", "md:p-5", "md:static", "md:translate-x-0", 3, "cdkTrapFocus", "cdkTrapFocusAutoCapture", "ngClass"], ["type", "button", "aria-label", "Close navigation", "cdkFocusInitial", "", 1, "mb-2", "ml-auto", "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "hover:bg-white/15", "md:hidden", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-5", "w-5"], ["d", "m6 6 12 12M6 18 18 6"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-1.5", "py-5"], ["routerLink", "/home", 1, "block"], ["src", "/NABO.png", "alt", "NABOO", 1, "h-9", "w-auto", "object-contain"], [1, "text-[11px]", "font-medium", "text-white/70"], [1, "mx-1", "border-0", "border-t", "border-white/20"], [1, "mt-4", "grid", "gap-1"], ["routerLink", "/dashboard", "routerLinkActive", "cis-nav-active", 1, "grid", "grid-cols-[44px_1fr]", "items-center", "rounded-xl", "px-3", "py-2", "text-sm", "text-white/90", "hover:bg-white/15", 3, "routerLinkActiveOptions"], [1, "grid", "h-8", "w-8", "place-items-center", "rounded-lg", "bg-white/5", "ring-1", "ring-white/10"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 11l9-8 9 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V11z"], ["routerLink", "/counter", "routerLinkActive", "cis-nav-active", "ariaCurrentWhenActive", "page", "class", "grid grid-cols-[44px_1fr] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15", 4, "ngIf"], [1, "relative"], [1, "grid", "w-full", "grid-cols-[44px_1fr_auto]", "items-center", "rounded-xl", "px-3", "py-2", "text-sm", "text-white/90", "hover:bg-white/15", "cursor-pointer", 3, "keydown.enter", "click", "routerLink", "ngClass"], [1, "relative", "grid", "h-8", "w-8", "place-items-center", "rounded-lg", "bg-white/5", "ring-1", "ring-white/10"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 13h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4", "transition-transform", "duration-200", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 5l7 7-7 7"], ["class", "fixed inset-0 z-[60] hidden md:block", 3, "click", 4, "ngIf"], ["class", "cis-sidebar-flyout absolute left-full top-0 z-[61] ml-2 w-56 rounded-xl bg-white dark:bg-slate-800 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden", 3, "click", 4, "ngIf"], ["routerLink", "/inventory", "routerLinkActive", "cis-nav-active", "class", "grid grid-cols-[44px_1fr] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15", 3, "routerLinkActiveOptions", 4, "ngIf"], ["routerLink", "/purchasing", "routerLinkActive", "cis-nav-active", "class", "grid grid-cols-[44px_1fr] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15", 3, "routerLinkActiveOptions", 4, "ngIf"], ["type", "button", 1, "grid", "w-full", "grid-cols-[44px_1fr_auto]", "items-center", "rounded-xl", "px-3", "py-2", "text-left", "text-sm", "text-white/90", "hover:bg-white/15", 3, "click", "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v2m0 10v2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 12a8 8 0 11-16 0 8 8 0 0116 0z"], ["routerLink", "/reports", "routerLinkActive", "cis-nav-active", "class", "grid grid-cols-[44px_1fr] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15", 3, "routerLinkActiveOptions", 4, "ngIf"], ["routerLink", "/users", "routerLinkActive", "cis-nav-active", "class", "grid grid-cols-[44px_1fr] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15", 3, "routerLinkActiveOptions", 4, "ngIf"], ["routerLink", "/branches", "routerLinkActive", "cis-nav-active", "class", "grid grid-cols-[44px_1fr] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15", 3, "routerLinkActiveOptions", 4, "ngIf"], [1, "mt-auto", "pt-6"], [1, "text-center", "text-[11px]", "text-purple-100/90"], ["routerLink", "/counter", "routerLinkActive", "cis-nav-active", "ariaCurrentWhenActive", "page", 1, "grid", "grid-cols-[44px_1fr]", "items-center", "rounded-xl", "px-3", "py-2", "text-sm", "text-white/90", "hover:bg-white/15"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-4", "w-4"], ["d", "M5 3h14v12H5zM8 6h8M8 10h2m4 0h2M3 15h18v6H3zM9 18h6"], [1, "fixed", "inset-0", "z-[60]", "hidden", "md:block", 3, "click"], [1, "cis-sidebar-flyout", "absolute", "left-full", "top-0", "z-[61]", "ml-2", "w-56", "rounded-xl", "bg-white", "dark:bg-slate-800", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", "overflow-hidden", 3, "click"], [1, "border-b", "border-slate-100", "dark:border-slate-700", "px-4", "py-3"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-400", "dark:text-slate-500"], [1, "grid", "gap-0.5", "p-2"], ["routerLink", "/product-dashboard", "class", "rounded-lg px-3 py-2 text-sm font-semibold text-primary-700 dark:text-primary-200", 4, "ngIf"], ["routerLink", "/products", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", "class", "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700", 3, "routerLinkActiveOptions", "click", 4, "ngIf"], ["routerLink", "/categories", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", "class", "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700", 3, "routerLinkActiveOptions", "click", 4, "ngIf"], ["routerLink", "/stock-movements", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", "class", "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700", 3, "routerLinkActiveOptions", "click", 4, "ngIf"], ["routerLink", "/transfers", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", "class", "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700", 3, "routerLinkActiveOptions", "click", 4, "ngIf"], ["routerLink", "/expiry-alerts", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", 1, "flex", "items-center", "gap-3", "rounded-lg", "px-3", "py-2", "text-sm", "text-slate-700", "dark:text-slate-300", "hover:bg-slate-50", "dark:hover:bg-slate-700", 3, "click", "routerLinkActiveOptions"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4", "text-amber-600", "dark:text-amber-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v4m0 4h.01"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"], ["routerLink", "/product-dashboard", 1, "rounded-lg", "px-3", "py-2", "text-sm", "font-semibold", "text-primary-700", "dark:text-primary-200"], ["routerLink", "/products", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", 1, "flex", "items-center", "gap-3", "rounded-lg", "px-3", "py-2", "text-sm", "text-slate-700", "dark:text-slate-300", "hover:bg-slate-50", "dark:hover:bg-slate-700", 3, "click", "routerLinkActiveOptions"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4", "text-purple-600", "dark:text-purple-400"], ["routerLink", "/categories", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", 1, "flex", "items-center", "gap-3", "rounded-lg", "px-3", "py-2", "text-sm", "text-slate-700", "dark:text-slate-300", "hover:bg-slate-50", "dark:hover:bg-slate-700", 3, "click", "routerLinkActiveOptions"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4", "text-emerald-600", "dark:text-emerald-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 6h16M4 12h16M4 18h16"], ["routerLink", "/stock-movements", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", 1, "flex", "items-center", "gap-3", "rounded-lg", "px-3", "py-2", "text-sm", "text-slate-700", "dark:text-slate-300", "hover:bg-slate-50", "dark:hover:bg-slate-700", 3, "click", "routerLinkActiveOptions"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4", "text-sky-600", "dark:text-sky-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8 7h13M8 12h13M8 17h13"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 7h.01M3 12h.01M3 17h.01"], ["routerLink", "/transfers", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", 1, "flex", "items-center", "gap-3", "rounded-lg", "px-3", "py-2", "text-sm", "text-slate-700", "dark:text-slate-300", "hover:bg-slate-50", "dark:hover:bg-slate-700", 3, "click", "routerLinkActiveOptions"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4", "text-teal-600", "dark:text-teal-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8 7h13m0 0l-3-3m3 3l-3 3M16 17H3m0 0l3 3m-3-3l3-3"], ["routerLink", "/inventory", "routerLinkActive", "cis-nav-active", 1, "grid", "grid-cols-[44px_1fr]", "items-center", "rounded-xl", "px-3", "py-2", "text-sm", "text-white/90", "hover:bg-white/15", 3, "routerLinkActiveOptions"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4v10l8 4 8-4V7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 3v18"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 7l8 4 8-4"], ["class", "absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-red-500 px-0.5 text-[9px] font-bold leading-none text-white ring-2 ring-primary-500", 4, "ngIf"], [1, "absolute", "-right-1", "-top-1", "grid", "h-4", "min-w-4", "place-items-center", "rounded-full", "bg-red-500", "px-0.5", "text-[9px]", "font-bold", "leading-none", "text-white", "ring-2", "ring-primary-500"], ["routerLink", "/purchasing", "routerLinkActive", "cis-nav-active", 1, "grid", "grid-cols-[44px_1fr]", "items-center", "rounded-xl", "px-3", "py-2", "text-sm", "text-white/90", "hover:bg-white/15", 3, "routerLinkActiveOptions"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 3h2l.4 2M7 13h10l4-8H5.4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7 13l-1.5 7h13L17 13"], ["routerLink", "/sales", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", "class", "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700", 3, "routerLinkActiveOptions", "click", 4, "ngIf"], ["routerLink", "/my-sales", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", "class", "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700", 3, "routerLinkActiveOptions", "click", 4, "ngIf"], ["routerLink", "/sales", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", 1, "flex", "items-center", "gap-3", "rounded-lg", "px-3", "py-2", "text-sm", "text-slate-700", "dark:text-slate-300", "hover:bg-slate-50", "dark:hover:bg-slate-700", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/my-sales", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", 1, "flex", "items-center", "gap-3", "rounded-lg", "px-3", "py-2", "text-sm", "text-slate-700", "dark:text-slate-300", "hover:bg-slate-50", "dark:hover:bg-slate-700", 3, "click", "routerLinkActiveOptions"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 14l2 2 4-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"], ["routerLink", "/expenses", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", "class", "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700", 3, "routerLinkActiveOptions", "click", 4, "ngIf"], ["routerLink", "/expense-categories", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", "class", "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700", 3, "routerLinkActiveOptions", "click", 4, "ngIf"], ["routerLink", "/profit-management", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", "class", "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700", 3, "routerLinkActiveOptions", "click", 4, "ngIf"], ["routerLink", "/expenses", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", 1, "flex", "items-center", "gap-3", "rounded-lg", "px-3", "py-2", "text-sm", "text-slate-700", "dark:text-slate-300", "hover:bg-slate-50", "dark:hover:bg-slate-700", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/expense-categories", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", 1, "flex", "items-center", "gap-3", "rounded-lg", "px-3", "py-2", "text-sm", "text-slate-700", "dark:text-slate-300", "hover:bg-slate-50", "dark:hover:bg-slate-700", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/profit-management", "routerLinkActive", "bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold", 1, "flex", "items-center", "gap-3", "rounded-lg", "px-3", "py-2", "text-sm", "text-slate-700", "dark:text-slate-300", "hover:bg-slate-50", "dark:hover:bg-slate-700", 3, "click", "routerLinkActiveOptions"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 3v18h18"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7 15l3-3 3 2 5-6"], ["routerLink", "/reports", "routerLinkActive", "cis-nav-active", 1, "grid", "grid-cols-[44px_1fr]", "items-center", "rounded-xl", "px-3", "py-2", "text-sm", "text-white/90", "hover:bg-white/15", 3, "routerLinkActiveOptions"], ["routerLink", "/users", "routerLinkActive", "cis-nav-active", 1, "grid", "grid-cols-[44px_1fr]", "items-center", "rounded-xl", "px-3", "py-2", "text-sm", "text-white/90", "hover:bg-white/15", 3, "routerLinkActiveOptions"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17 20h5v-2a4 4 0 00-4-4h-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 20H2v-2a4 4 0 014-4h1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 3.13a4 4 0 010 7.75"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8 3.13a4 4 0 000 7.75"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 12a4 4 0 100-8 4 4 0 000 8z"], ["routerLink", "/branches", "routerLinkActive", "cis-nav-active", 1, "grid", "grid-cols-[44px_1fr]", "items-center", "rounded-xl", "px-3", "py-2", "text-sm", "text-white/90", "hover:bg-white/15", 3, "routerLinkActiveOptions"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 9l1.5-5h15L21 9"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 9h18M9 21v-7h6v7"], [1, "mt-8", "text-center", "text-xs", "text-slate-500", "dark:text-slate-400"], ["routerLink", "/counter", "routerLinkActive", "cis-bottom-active", "ariaCurrentWhenActive", "page"], [1, "cis-modal-overlay", "fixed", "inset-0", "z-50"], [1, "absolute", "inset-0", "bg-slate-900/40", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-sm", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-1", "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "mt-4", "grid", "gap-3"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], ["type", "password", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "input", "value"], ["class", "text-sm text-red-700 dark:text-red-400", 4, "ngIf"], ["class", "text-sm text-emerald-700 dark:text-emerald-400", 4, "ngIf"], [1, "mt-1", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-purple-600", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "text-sm", "text-red-700", "dark:text-red-400"], [1, "text-sm", "text-emerald-700", "dark:text-emerald-400"], [1, "w-full", "max-w-md", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ShellLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, ShellLayout_div_2_Template, 1, 0, "div", 2)(3, ShellLayout_aside_3_Template, 69, 64, "aside", 3);
      \u0275\u0275elementStart(4, "main", 4);
      \u0275\u0275listener("click", function ShellLayout_Template_main_click_4_listener() {
        return ctx.closeMenus();
      });
      \u0275\u0275elementStart(5, "app-shell-header", 5);
      \u0275\u0275listener("toggleSidebar", function ShellLayout_Template_app_shell_header_toggleSidebar_5_listener() {
        return ctx.toggleSidebar();
      })("toggleNotifications", function ShellLayout_Template_app_shell_header_toggleNotifications_5_listener() {
        return ctx.toggleNotifications();
      })("toggleUserMenu", function ShellLayout_Template_app_shell_header_toggleUserMenu_5_listener() {
        return ctx.toggleUserMenu();
      })("toggleLangMenu", function ShellLayout_Template_app_shell_header_toggleLangMenu_5_listener() {
        return ctx.toggleLangMenu();
      })("toggleBranchMenu", function ShellLayout_Template_app_shell_header_toggleBranchMenu_5_listener() {
        return ctx.toggleBranchMenu();
      })("closeMenus", function ShellLayout_Template_app_shell_header_closeMenus_5_listener() {
        return ctx.closeMenus();
      })("logout", function ShellLayout_Template_app_shell_header_logout_5_listener() {
        return ctx.logout();
      })("changePassword", function ShellLayout_Template_app_shell_header_changePassword_5_listener() {
        return ctx.openChangePassword();
      })("resetUserPassword", function ShellLayout_Template_app_shell_header_resetUserPassword_5_listener() {
        return ctx.openResetUserPassword();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275element(7, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, ShellLayout_footer_8_Template, 3, 4, "footer", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "nav", 8)(10, "a", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 10);
      \u0275\u0275element(12, "path", 11)(13, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "a", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 10);
      \u0275\u0275element(19, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(23, ShellLayout_a_23_Template, 6, 3, "a", 15);
      \u0275\u0275elementStart(24, "button", 16);
      \u0275\u0275listener("click", function ShellLayout_Template_button_click_24_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 10);
      \u0275\u0275element(26, "path", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(30, ShellLayout_div_30_Template, 28, 23, "div", 18)(31, ShellLayout_div_31_Template, 32, 27, "div", 18);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c03, !ctx.isHome() && ctx.sidebarOpen()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMobile() && ctx.sidebarOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isHome() || ctx.isMobile());
      \u0275\u0275advance(2);
      \u0275\u0275property("user", ctx.user())("isAuthed", ctx.isAuthed())("showSidebarToggle", !ctx.isHome() || ctx.isMobile())("sidebarOpen", ctx.sidebarOpen())("notificationsCount", ctx.notificationsCount())("notificationsOpen", ctx.notificationsOpen())("userMenuOpen", ctx.userMenuOpen())("langMenuOpen", ctx.langMenuOpen())("branchMenuOpen", ctx.branchMenuOpen());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isHome());
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(29, _c13));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 21, "nav.home"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 23, "nav.dashboard"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.canView("SALES") || ctx.canView("EXPENSES"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-expanded", ctx.sidebarOpen());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 25, "nav.menu"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.changePasswordOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.resetUserPasswordOpen());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, A11yModule, CdkTrapFocus, RouterLink, RouterLinkActive, RouterOutlet, ShellHeaderComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .cis-nav-active[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: var(--cis-primary);\n  font-weight: 700;\n  box-shadow: 0 6px 16px rgba(29, 26, 66, 0.18);\n}\n[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .cis-nav-active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  background-color: var(--cis-primary-soft);\n  box-shadow: none;\n}\n.dark[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .cis-nav-active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .cis-nav-active[_ngcontent-%COMP%] {\n  background-color: var(--cis-surface);\n  color: #ffffff;\n}\n@media (min-width: 768px) {\n  .cis-sidebar[_ngcontent-%COMP%] {\n    border-radius: 0 28px 28px 0;\n    box-shadow: 6px 0 24px rgba(var(--cis-primary-rgb), 0.25);\n  }\n}\n.cis-system[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.cis-bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 767px) {\n  .cis-system[_ngcontent-%COMP%] {\n    padding: 0 12px calc(88px + env(safe-area-inset-bottom));\n  }\n  app-shell-header[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 0;\n    z-index: 40;\n    display: block;\n    padding-top: env(safe-area-inset-top);\n    background: var(--cis-page);\n  }\n  .cis-sidebar[_ngcontent-%COMP%] {\n    width: min(300px, 88vw);\n    height: 100dvh;\n    overflow-y: auto;\n    overscroll-behavior: contain;\n    padding-top: max(16px, env(safe-area-inset-top));\n    padding-bottom: max(16px, env(safe-area-inset-bottom));\n  }\n  .cis-sidebar-flyout[_ngcontent-%COMP%] {\n    position: static;\n    width: 100%;\n    margin: 6px 0;\n    box-shadow: none;\n  }\n  .cis-bottom-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    inset: auto 0 0;\n    z-index: 30;\n    display: flex;\n    padding: 6px max(8px, env(safe-area-inset-right)) calc(6px + env(safe-area-inset-bottom)) max(8px, env(safe-area-inset-left));\n    border-top: 1px solid var(--cis-border);\n    background: var(--cis-surface);\n    box-shadow: 0 -4px 18px rgba(var(--cis-primary-rgb), 0.08);\n  }\n  .cis-bottom-nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n   .cis-bottom-nav[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 1;\n    min-width: 0;\n    min-height: 54px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 4px;\n    border-radius: 12px;\n    padding: 4px;\n    color: var(--cis-muted);\n    font-size: 11px;\n    font-weight: 600;\n    text-align: center;\n  }\n  .cis-bottom-nav[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 21px;\n    height: 21px;\n  }\n  .cis-bottom-nav[_ngcontent-%COMP%]   .cis-bottom-active[_ngcontent-%COMP%] {\n    background: var(--cis-primary-soft);\n    color: var(--cis-primary-strong);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .cis-sidebar[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=shell.layout.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShellLayout, [{
    type: Component,
    args: [{ selector: "cis-shell", standalone: true, imports: [CommonModule, A11yModule, RouterLink, RouterLinkActive, RouterOutlet, ShellHeaderComponent, TranslatePipe], hostDirectives: [ResponsiveTablesDirective], template: `<div class="min-h-screen bg-slate-50 dark:bg-slate-900">
  <div
    class="grid min-h-screen grid-cols-1"
    [ngClass]="{ 'md:grid-cols-[260px_1fr]': !isHome() && sidebarOpen() }"
  >
    <div
      *ngIf="isMobile() && sidebarOpen()"
      class="fixed inset-0 z-40 bg-slate-900/40 md:hidden"
      (click)="closeSidebar()"
    ></div>

    <aside
      *ngIf="!isHome() || isMobile()"
      id="main-sidebar"
      aria-label="Main navigation"
      [attr.role]="isMobile() ? 'dialog' : null"
      [attr.aria-modal]="isMobile() && sidebarOpen() ? true : null"
      [attr.inert]="isMobile() && !sidebarOpen() ? '' : null"
      [cdkTrapFocus]="isMobile() && sidebarOpen()"
      [cdkTrapFocusAutoCapture]="isMobile() && sidebarOpen()"
      [class.cis-sidebar-open]="isMobile() && sidebarOpen()"
      class="cis-sidebar z-50 flex flex-col bg-primary-500 dark:bg-primary-900 text-white p-4 md:p-5 md:static md:translate-x-0"
      [ngClass]="{
        'fixed inset-y-0 left-0 w-[260px] transform transition-transform duration-200 ease-out': true,
        'md:hidden': !sidebarOpen(),
        '-translate-x-full': !sidebarOpen(),
        'translate-x-0': sidebarOpen()
      }"
    >
      <button type="button" class="mb-2 ml-auto flex h-11 w-11 items-center justify-center rounded-xl hover:bg-white/15 md:hidden" (click)="closeSidebar()" aria-label="Close navigation" cdkFocusInitial>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg>
      </button>
      <div class="flex flex-col items-center justify-center gap-1.5 py-5">
        <a routerLink="/home" class="block">
          <img src="/NABO.png" alt="NABOO" class="h-9 w-auto object-contain" />
        </a>
        <span class="text-[11px] font-medium text-white/70">Sales &amp; Management System</span>
      </div>

      <hr class="mx-1 border-0 border-t border-white/20" />

      <nav class="mt-4 grid gap-1">
        <a
          routerLink="/dashboard"
          routerLinkActive="cis-nav-active"
          [routerLinkActiveOptions]="{ exact: true }"
          class="grid grid-cols-[44px_1fr] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15">
          <span class="grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 11l9-8 9 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V11z" />
            </svg>
          </span>
          <span>{{ 'nav.dashboard' | translate }}</span>
        </a>

        <a
          *ngIf="canView('SALES') || canView('EXPENSES')"
          routerLink="/counter"
          routerLinkActive="cis-nav-active"
          ariaCurrentWhenActive="page"
          class="grid grid-cols-[44px_1fr] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15">
          <span class="grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4" aria-hidden="true"><path d="M5 3h14v12H5zM8 6h8M8 10h2m4 0h2M3 15h18v6H3zM9 18h6" /></svg>
          </span>
          <span>{{ 'nav.counter' | translate }}</span>
        </a>

        <!-- Products with flyout popup -->
        <div class="relative">
          <a
            [routerLink]="isMobile() ? null : '/product-dashboard'"
            [attr.role]="isMobile() ? 'button' : null"
            [attr.tabindex]="isMobile() ? 0 : null"
            [attr.aria-expanded]="productsExpanded()"
            (keydown.enter)="isMobile() && toggleProducts()"
            (click)="toggleProducts(); $event.stopPropagation()"
            class="grid w-full grid-cols-[44px_1fr_auto] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15 cursor-pointer"
            [ngClass]="{ 'cis-nav-active': isProductsSection() || productsExpanded() }">
            <span class="relative grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 13h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />
              </svg>
            </span>
            <span>{{ 'nav.productDashboard' | translate }}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 transition-transform duration-200"
              [ngClass]="{ 'rotate-90': productsExpanded() }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          <!-- Flyout backdrop (click to close) -->
          <div
            *ngIf="productsExpanded()"
            class="fixed inset-0 z-[60] hidden md:block"
            (click)="toggleProducts()">
          </div>

          <!-- Flyout popup -->
          <div
            *ngIf="productsExpanded()"
            class="cis-sidebar-flyout absolute left-full top-0 z-[61] ml-2 w-56 rounded-xl bg-white dark:bg-slate-800 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden"
            (click)="$event.stopPropagation()">

            <div class="border-b border-slate-100 dark:border-slate-700 px-4 py-3">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{{ 'nav.productDashboard' | translate }}</div>
            </div>

            <div class="grid gap-0.5 p-2">
              <a *ngIf="isMobile()" routerLink="/product-dashboard" class="rounded-lg px-3 py-2 text-sm font-semibold text-primary-700 dark:text-primary-200">{{ 'nav.overview' | translate }}</a>
              <a
                *ngIf="canView('PRODUCTS')"
                routerLink="/products"
                routerLinkActive="bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold"
                [routerLinkActiveOptions]="{ exact: true }"
                (click)="toggleProducts()"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-purple-600 dark:text-purple-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 13h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />
                </svg>
                <span>{{ 'nav.products' | translate }}</span>
              </a>

              <a
                *ngIf="canView('CATEGORIES')"
                routerLink="/categories"
                routerLinkActive="bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold"
                [routerLinkActiveOptions]="{ exact: true }"
                (click)="toggleProducts()"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-emerald-600 dark:text-emerald-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>{{ 'nav.categories' | translate }}</span>
              </a>

              <a
                *ngIf="canView('STOCK_MOVEMENTS')"
                routerLink="/stock-movements"
                routerLinkActive="bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold"
                [routerLinkActiveOptions]="{ exact: true }"
                (click)="toggleProducts()"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-sky-600 dark:text-sky-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h13M8 12h13M8 17h13" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h.01M3 12h.01M3 17h.01" />
                </svg>
                <span>{{ 'nav.stockMovements' | translate }}</span>
              </a>

              <a
                *ngIf="canView('TRANSFERS')"
                routerLink="/transfers"
                routerLinkActive="bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold"
                [routerLinkActiveOptions]="{ exact: true }"
                (click)="toggleProducts()"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-teal-600 dark:text-teal-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h13m0 0l-3-3m3 3l-3 3M16 17H3m0 0l3 3m-3-3l3-3" />
                </svg>
                <span>{{ 'nav.transfers' | translate }}</span>
              </a>

              <a
                routerLink="/expiry-alerts"
                routerLinkActive="bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold"
                [routerLinkActiveOptions]="{ exact: true }"
                (click)="toggleProducts()"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-amber-600 dark:text-amber-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 4h.01" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                <span>{{ 'nav.expiryAlerts' | translate }}</span>
              </a>
            </div>
          </div>
        </div>

        <a
          *ngIf="canView('INVENTORY')"
          routerLink="/inventory"
          routerLinkActive="cis-nav-active"
          [routerLinkActiveOptions]="{ exact: true }"
          class="grid grid-cols-[44px_1fr] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15">
          <span class="relative grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4v10l8 4 8-4V7z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 7l8 4 8-4" />
            </svg>
            <span
              *ngIf="pendingReceivingCount()"
              class="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-red-500 px-0.5 text-[9px] font-bold leading-none text-white ring-2 ring-primary-500"
            >{{ pendingReceivingCount() }}</span>
          </span>
          <span>{{ 'nav.inventory' | translate }}</span>
        </a>

        <a
          *ngIf="canView('PURCHASING')"
          routerLink="/purchasing"
          routerLinkActive="cis-nav-active"
          [routerLinkActiveOptions]="{ exact: true }"
          class="grid grid-cols-[44px_1fr] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15">
          <span class="grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 13l-1.5 7h13L17 13" />
            </svg>
          </span>
          <span>{{ 'nav.purchasing' | translate }}</span>
        </a>

        <!-- Sales with flyout popup -->
        <div class="relative">
          <button
            type="button"
            (click)="toggleSales(); $event.stopPropagation()"
            class="grid w-full grid-cols-[44px_1fr_auto] items-center rounded-xl px-3 py-2 text-left text-sm text-white/90 hover:bg-white/15"
            [ngClass]="{ 'cis-nav-active': isSalesSection() || salesExpanded() }">
            <span class="grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v2m0 10v2" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" />
              </svg>
            </span>
            <span>{{ 'nav.sales' | translate }}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 transition-transform duration-200"
              [ngClass]="{ 'rotate-90': salesExpanded() }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Flyout backdrop (click to close) -->
          <div
            *ngIf="salesExpanded()"
            class="fixed inset-0 z-[60] hidden md:block"
            (click)="toggleSales()">
          </div>

          <!-- Flyout popup -->
          <div
            *ngIf="salesExpanded()"
            class="cis-sidebar-flyout absolute left-full top-0 z-[61] ml-2 w-56 rounded-xl bg-white dark:bg-slate-800 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden"
            (click)="$event.stopPropagation()">

            <div class="border-b border-slate-100 dark:border-slate-700 px-4 py-3">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{{ 'nav.sales' | translate }}</div>
            </div>

            <div class="grid gap-0.5 p-2">
              <a
                *ngIf="canView('SALES')"
                routerLink="/sales"
                routerLinkActive="bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold"
                [routerLinkActiveOptions]="{ exact: true }"
                (click)="toggleSales()"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-emerald-600 dark:text-emerald-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v2m0 10v2" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
                <span>{{ 'nav.sales' | translate }}</span>
              </a>

              <a
                *ngIf="canView('MY_SALES')"
                routerLink="/my-sales"
                routerLinkActive="bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold"
                [routerLinkActiveOptions]="{ exact: true }"
                (click)="toggleSales()"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-purple-600 dark:text-purple-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 14l2 2 4-4" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
                </svg>
                <span>{{ 'nav.mySales' | translate }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Finance with flyout popup -->
        <div class="relative">
          <button
            type="button"
            (click)="toggleFinance(); $event.stopPropagation()"
            class="grid w-full grid-cols-[44px_1fr_auto] items-center rounded-xl px-3 py-2 text-left text-sm text-white/90 hover:bg-white/15"
            [ngClass]="{ 'cis-nav-active': isFinanceSection() || financeExpanded() }">
            <span class="grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v2m0 10v2" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" />
              </svg>
            </span>
            <span>{{ 'nav.finance' | translate }}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 transition-transform duration-200"
              [ngClass]="{ 'rotate-90': financeExpanded() }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Flyout backdrop (click to close) -->
          <div
            *ngIf="financeExpanded()"
            class="fixed inset-0 z-[60] hidden md:block"
            (click)="toggleFinance()">
          </div>

          <!-- Flyout popup -->
          <div
            *ngIf="financeExpanded()"
            class="cis-sidebar-flyout absolute left-full top-0 z-[61] ml-2 w-56 rounded-xl bg-white dark:bg-slate-800 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden"
            (click)="$event.stopPropagation()">

            <div class="border-b border-slate-100 dark:border-slate-700 px-4 py-3">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{{ 'nav.finance' | translate }}</div>
            </div>

            <div class="grid gap-0.5 p-2">
              <a
                *ngIf="canView('EXPENSES')"
                routerLink="/expenses"
                routerLinkActive="bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold"
                [routerLinkActiveOptions]="{ exact: true }"
                (click)="toggleFinance()"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-emerald-600 dark:text-emerald-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v2m0 10v2" />
                </svg>
                <span>{{ 'nav.expenses' | translate }}</span>
              </a>

              <a
                *ngIf="canView('EXPENSE_CATEGORIES')"
                routerLink="/expense-categories"
                routerLinkActive="bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold"
                [routerLinkActiveOptions]="{ exact: true }"
                (click)="toggleFinance()"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-amber-600 dark:text-amber-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>{{ 'nav.expenseCategories' | translate }}</span>
              </a>

              <a
                *ngIf="canView('PROFIT_MANAGEMENT')"
                routerLink="/profit-management"
                routerLinkActive="bg-pink-50 dark:bg-pink-900/30 text-pink-900 dark:text-pink-300 font-semibold"
                [routerLinkActiveOptions]="{ exact: true }"
                (click)="toggleFinance()"
                class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-purple-600 dark:text-purple-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 15l3-3 3 2 5-6" />
                </svg>
                <span>{{ 'nav.profitManagement' | translate }}</span>
              </a>
            </div>
          </div>
        </div>

        <a
          *ngIf="canView('REPORTS')"
          routerLink="/reports"
          routerLinkActive="cis-nav-active"
          [routerLinkActiveOptions]="{ exact: true }"
          class="grid grid-cols-[44px_1fr] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15">
          <span class="grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 15l3-3 3 2 5-6" />
            </svg>
          </span>
          <span>{{ 'nav.reports' | translate }}</span>
        </a>


        <a
          *ngIf="canView('USERS_ROLES')"
          routerLink="/users"
          routerLinkActive="cis-nav-active"
          [routerLinkActiveOptions]="{ exact: true }"
          class="grid grid-cols-[44px_1fr] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15">
          <span class="grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 20H2v-2a4 4 0 014-4h1" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 3.13a4 4 0 010 7.75" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 3.13a4 4 0 000 7.75" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </span>
          <span>{{ 'nav.usersRoles' | translate }}</span>
        </a>

        <a
          *ngIf="canView('BRANCHES')"
          routerLink="/branches"
          routerLinkActive="cis-nav-active"
          [routerLinkActiveOptions]="{ exact: true }"
          class="grid grid-cols-[44px_1fr] items-center rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/15">
          <span class="grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 9l1.5-5h15L21 9" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 9h18M9 21v-7h6v7" />
            </svg>
          </span>
          <span>{{ 'nav.branches' | translate }}</span>
        </a>

      </nav>

      <!-- <button
        *ngIf="isAuthed()"
        (click)="logout()"
        class="mt-6 w-full rounded-xl bg-white/15 px-3 py-2 text-sm font-semibold hover:bg-white/20"
      >
        Logout
      </button> -->

      <div class="mt-auto pt-6">
        <div class="text-center text-[11px] text-purple-100/90">
          \xA9 {{ currentYear }} {{ 'common.footer' | translate }}
        </div>
      </div>
    </aside>

    <main class="cis-system flex min-h-screen flex-col p-4 md:p-6 dark:bg-slate-900" (click)="closeMenus()">
      <app-shell-header
        [user]="user()"
        [isAuthed]="isAuthed()"
        [showSidebarToggle]="!isHome() || isMobile()"
        [sidebarOpen]="sidebarOpen()"
        [notificationsCount]="notificationsCount()"
        [notificationsOpen]="notificationsOpen()"
        [userMenuOpen]="userMenuOpen()"
        [langMenuOpen]="langMenuOpen()"
        [branchMenuOpen]="branchMenuOpen()"
        (toggleSidebar)="toggleSidebar()"
        (toggleNotifications)="toggleNotifications()"
        (toggleUserMenu)="toggleUserMenu()"
        (toggleLangMenu)="toggleLangMenu()"
        (toggleBranchMenu)="toggleBranchMenu()"
        (closeMenus)="closeMenus()"
        (logout)="logout()"
        (changePassword)="openChangePassword()"
        (resetUserPassword)="openResetUserPassword()"
      />

      <div class="flex-1">
        <router-outlet />
      </div>

      <footer *ngIf="isHome()" class="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
        \xA9 {{ currentYear }} {{ 'common.footer' | translate }}
      </footer>
    </main>
  </div>

  <nav class="cis-bottom-nav" aria-label="Mobile navigation">
    <a routerLink="/home" routerLinkActive="cis-bottom-active" ariaCurrentWhenActive="page" [routerLinkActiveOptions]="{ exact: true }" aria-label="Home">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m3 10 9-7 9 7v10H3V10Z" /><path d="M9 20v-7h6v7" /></svg>
      <span>{{ 'nav.home' | translate }}</span>
    </a>
    <a routerLink="/dashboard" routerLinkActive="cis-bottom-active" ariaCurrentWhenActive="page">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" /></svg>
      <span>{{ 'nav.dashboard' | translate }}</span>
    </a>
    <a *ngIf="canView('SALES') || canView('EXPENSES')" routerLink="/counter" routerLinkActive="cis-bottom-active" ariaCurrentWhenActive="page">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 3h14v12H5zM8 6h8M8 10h2m4 0h2M3 15h18v6H3zM9 18h6" /></svg>
      <span>{{ 'nav.counter' | translate }}</span>
    </a>
    <button type="button" (click)="toggleSidebar()" [attr.aria-expanded]="sidebarOpen()" aria-controls="main-sidebar" aria-label="Open navigation">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
      <span>{{ 'nav.menu' | translate }}</span>
    </button>
  </nav>
</div>

<div *ngIf="changePasswordOpen()" class="cis-modal-overlay fixed inset-0 z-50">
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeChangePassword()"></div>
  <div class="absolute inset-0 flex items-center justify-center p-4">
    <div class="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">
      <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'modal.changePassword.title' | translate }}</div>
      <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ 'modal.changePassword.help' | translate }}</div>

      <div class="mt-4 grid gap-3">
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
          {{ 'modal.changePassword.currentPassword' | translate }}
          <input
            type="password"
            class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
            [value]="changePasswordCurrent()"
            (input)="changePasswordCurrent.set(($any($event.target).value))"
          />
        </label>

        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
          {{ 'modal.changePassword.newPassword' | translate }}
          <input
            type="password"
            class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
            [value]="changePasswordNew()"
            (input)="changePasswordNew.set(($any($event.target).value))"
          />
        </label>

        <div class="text-sm text-red-700 dark:text-red-400" *ngIf="changePasswordError()">{{ changePasswordError() }}</div>
        <div class="text-sm text-emerald-700 dark:text-emerald-400" *ngIf="changePasswordSuccess()">{{ changePasswordSuccess() }}</div>

        <div class="mt-1 flex items-center justify-end gap-2">
          <button
            type="button"
            class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"
            (click)="closeChangePassword()"
          >
            {{ 'common.cancel' | translate }}
          </button>
          <button
            type="button"
            class="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            (click)="submitChangePassword()"
            [disabled]="changePasswordLoading()"
          >
            {{ 'modal.changePassword.update' | translate }}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div *ngIf="resetUserPasswordOpen()" class="cis-modal-overlay fixed inset-0 z-50">
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeResetUserPassword()"></div>
  <div class="absolute inset-0 flex items-center justify-center p-4">
    <div class="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">
      <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'modal.resetPassword.title' | translate }}</div>
      <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ 'modal.resetPassword.help' | translate }}</div>

      <div class="mt-4 grid gap-3">
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
          {{ 'modal.resetPassword.user' | translate }}
          <select
            class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
            [value]="resetUserId()"
            (change)="resetUserId.set(($any($event.target).value))"
          >
            <option value="">{{ 'modal.resetPassword.selectUser' | translate }}</option>
            <option *ngFor="let u of adminUsers()" [value]="u.id">{{ u.name }} ({{ u.email }})</option>
          </select>
        </label>

        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
          {{ 'modal.resetPassword.newPassword' | translate }}
          <input
            type="password"
            class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
            [value]="resetNewPassword()"
            (input)="resetNewPassword.set(($any($event.target).value))"
          />
        </label>

        <div class="text-sm text-red-700 dark:text-red-400" *ngIf="resetUserPasswordError()">{{ resetUserPasswordError() }}</div>
        <div class="text-sm text-emerald-700 dark:text-emerald-400" *ngIf="resetUserPasswordSuccess()">{{ resetUserPasswordSuccess() }}</div>

        <div class="mt-1 flex items-center justify-end gap-2">
          <button
            type="button"
            class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"
            (click)="closeResetUserPassword()"
          >
            {{ 'common.cancel' | translate }}
          </button>
          <button
            type="button"
            class="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            (click)="submitResetUserPassword()"
            [disabled]="resetUserPasswordLoading()"
          >
            {{ 'modal.resetPassword.reset' | translate }}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/shell/shell.layout.scss */\n:host aside nav .cis-nav-active {\n  background-color: #ffffff;\n  color: var(--cis-primary);\n  font-weight: 700;\n  box-shadow: 0 6px 16px rgba(29, 26, 66, 0.18);\n}\n:host aside nav .cis-nav-active > span:first-child {\n  background-color: var(--cis-primary-soft);\n  box-shadow: none;\n}\n:host-context(.dark) aside nav .cis-nav-active {\n  background-color: var(--cis-surface);\n  color: #ffffff;\n}\n@media (min-width: 768px) {\n  .cis-sidebar {\n    border-radius: 0 28px 28px 0;\n    box-shadow: 6px 0 24px rgba(var(--cis-primary-rgb), 0.25);\n  }\n}\n.cis-system {\n  min-width: 0;\n}\n.cis-bottom-nav {\n  display: none;\n}\n@media (max-width: 767px) {\n  .cis-system {\n    padding: 0 12px calc(88px + env(safe-area-inset-bottom));\n  }\n  app-shell-header {\n    position: sticky;\n    top: 0;\n    z-index: 40;\n    display: block;\n    padding-top: env(safe-area-inset-top);\n    background: var(--cis-page);\n  }\n  .cis-sidebar {\n    width: min(300px, 88vw);\n    height: 100dvh;\n    overflow-y: auto;\n    overscroll-behavior: contain;\n    padding-top: max(16px, env(safe-area-inset-top));\n    padding-bottom: max(16px, env(safe-area-inset-bottom));\n  }\n  .cis-sidebar-flyout {\n    position: static;\n    width: 100%;\n    margin: 6px 0;\n    box-shadow: none;\n  }\n  .cis-bottom-nav {\n    position: fixed;\n    inset: auto 0 0;\n    z-index: 30;\n    display: flex;\n    padding: 6px max(8px, env(safe-area-inset-right)) calc(6px + env(safe-area-inset-bottom)) max(8px, env(safe-area-inset-left));\n    border-top: 1px solid var(--cis-border);\n    background: var(--cis-surface);\n    box-shadow: 0 -4px 18px rgba(var(--cis-primary-rgb), 0.08);\n  }\n  .cis-bottom-nav > a,\n  .cis-bottom-nav > button {\n    display: flex;\n    flex: 1;\n    min-width: 0;\n    min-height: 54px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 4px;\n    border-radius: 12px;\n    padding: 4px;\n    color: var(--cis-muted);\n    font-size: 11px;\n    font-weight: 600;\n    text-align: center;\n  }\n  .cis-bottom-nav svg {\n    width: 21px;\n    height: 21px;\n  }\n  .cis-bottom-nav .cis-bottom-active {\n    background: var(--cis-primary-soft);\n    color: var(--cis-primary-strong);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .cis-sidebar {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=shell.layout.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: GraphqlService }, { type: Router }, { type: DestroyRef }], { onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellLayout, { className: "ShellLayout", filePath: "app/features/shell/shell.layout.ts", lineNumber: 61 });
})();

// src/app/features/dashboard/dashboard.page.ts
function DashboardPage_div_35_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.profitError());
  }
}
function DashboardPage_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 10)(2, "div")(3, "h3", 11);
    \u0275\u0275text(4, "Profit Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275text(6, "Sales profit minus daily expenses");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 31);
    \u0275\u0275listener("ngSubmit", function DashboardPage_div_35_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadProfit());
    });
    \u0275\u0275element(8, "input", 32);
    \u0275\u0275elementStart(9, "button", 33);
    \u0275\u0275listener("click", function DashboardPage_div_35_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadProfit());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, DashboardPage_div_35_div_12_Template, 2, 1, "div", 22);
    \u0275\u0275elementStart(13, "div", 34)(14, "div", 35)(15, "div", 5);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 36);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 37)(22, "div", 5);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 36);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 30);
    \u0275\u0275text(29, "(From stock movements)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 4)(31, "div", 5);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 36);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 38)(38, "div", 39);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 40);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 41);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 42)(49, "section", 43)(50, "div", 10)(51, "h4", 11);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 44);
    \u0275\u0275element(55, "canvas", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "section", 4)(57, "div", 10)(58, "h4", 11);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 44);
    \u0275\u0275element(62, "canvas", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "section", 4)(64, "div", 10)(65, "h4", 11);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 44);
    \u0275\u0275element(69, "canvas", 45);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.selectedDateForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.profitLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 29, "common.refresh"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.profitError());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 31, "common.todaySales"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 33, ctx_r1.todaySales()));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 35, "common.grossProfit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 37, ctx_r1.grossProfit()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 39, "common.expensesToday"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 41, ctx_r1.expensesToday()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.netProfitIsPositive() ? "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-900/10 ring-emerald-300/60 dark:ring-emerald-700" : "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-900/10 ring-red-300/60 dark:ring-red-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.netProfitIsPositive() ? "text-emerald-700 dark:text-emerald-400" : "text-[#B81104] dark:text-red-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 43, "common.netProfit"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.netProfitIsPositive() ? "text-emerald-800 dark:text-emerald-300" : "text-red-800 dark:text-red-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 45, ctx_r1.netProfit()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.netProfitIsPositive() ? "text-emerald-700 dark:text-emerald-400" : "text-[#B81104] dark:text-red-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.netProfitIsPositive() ? \u0275\u0275pipeBind1(46, 47, "common.profitPositive") : \u0275\u0275pipeBind1(47, 49, "common.lossNegative"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 51, "common.last7DaysProfit"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", "line")("data", ctx_r1.lineChartData())("options", ctx_r1.lineChartOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 53, "common.topSellingProducts"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", "bar")("data", ctx_r1.barChartData())("options", ctx_r1.barChartOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 55, "common.expenseBreakdown"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", "pie")("data", ctx_r1.pieChartData())("options", ctx_r1.pieChartOptions);
  }
}
function DashboardPage_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.noAlertsThresholds"), " ");
  }
}
function DashboardPage_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function DashboardPage_tr_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 48)(1, "td", 49)(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 51);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 51);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 52);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-[#FFFACD]", m_r3.type === "IN")("text-emerald-800", m_r3.type === "IN")("bg-[#B81104]/10", m_r3.type === "OUT")("text-red-800", m_r3.type === "OUT")("bg-slate-100", m_r3.type !== "IN" && m_r3.type !== "OUT")("text-slate-700", m_r3.type !== "IN" && m_r3.type !== "OUT");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r3.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.createdAt);
  }
}
function DashboardPage_tr_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 48)(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.noMovementsYet"));
  }
}
var DashboardPage = class _DashboardPage {
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  fb = inject(FormBuilder);
  gql = inject(GraphqlService);
  branchCtx = inject(BranchContext);
  totalStockValue = signal(null, ...ngDevMode ? [{ debugName: "totalStockValue" }] : []);
  productsCount = signal(0, ...ngDevMode ? [{ debugName: "productsCount" }] : []);
  categoriesCount = signal(0, ...ngDevMode ? [{ debugName: "categoriesCount" }] : []);
  expiryCount = signal(0, ...ngDevMode ? [{ debugName: "expiryCount" }] : []);
  lowStockCount = signal(0, ...ngDevMode ? [{ debugName: "lowStockCount" }] : []);
  recentMovements = signal([], ...ngDevMode ? [{ debugName: "recentMovements" }] : []);
  me = signal(null, ...ngDevMode ? [{ debugName: "me" }] : []);
  myPermissions = signal([], ...ngDevMode ? [{ debugName: "myPermissions" }] : []);
  isAdmin = computed(() => (this.me()?.roles ?? []).includes("ADMIN"), ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  canView = (module) => {
    if (this.isAdmin())
      return true;
    const mod = String(module).toUpperCase();
    const p = this.myPermissions().find((x) => String(x.module).toUpperCase() === mod);
    return Boolean(p?.canView);
  };
  profitLoading = signal(false, ...ngDevMode ? [{ debugName: "profitLoading" }] : []);
  profitError = signal(null, ...ngDevMode ? [{ debugName: "profitError" }] : []);
  selectedDateForm = this.fb.group({
    date: [(/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [Validators.required]]
  });
  todaySales = signal(0, ...ngDevMode ? [{ debugName: "todaySales" }] : []);
  grossProfit = signal(0, ...ngDevMode ? [{ debugName: "grossProfit" }] : []);
  expensesToday = signal(0, ...ngDevMode ? [{ debugName: "expensesToday" }] : []);
  netProfit = computed(() => this.grossProfit() - this.expensesToday(), ...ngDevMode ? [{ debugName: "netProfit" }] : []);
  netProfitIsPositive = computed(() => this.netProfit() >= 0, ...ngDevMode ? [{ debugName: "netProfitIsPositive" }] : []);
  profit7DaysLabels = signal([], ...ngDevMode ? [{ debugName: "profit7DaysLabels" }] : []);
  profit7DaysData = signal([], ...ngDevMode ? [{ debugName: "profit7DaysData" }] : []);
  topProductsLabels = signal([], ...ngDevMode ? [{ debugName: "topProductsLabels" }] : []);
  topProductsQty = signal([], ...ngDevMode ? [{ debugName: "topProductsQty" }] : []);
  expenseBreakdownLabels = signal([], ...ngDevMode ? [{ debugName: "expenseBreakdownLabels" }] : []);
  expenseBreakdownValues = signal([], ...ngDevMode ? [{ debugName: "expenseBreakdownValues" }] : []);
  lineChartData = computed(() => ({
    labels: this.profit7DaysLabels(),
    datasets: [
      {
        label: "Net Profit",
        data: this.profit7DaysData(),
        borderColor: "#7367d8",
        backgroundColor: "rgba(13,148,136,0.15)",
        tension: 0.25,
        fill: true
      }
    ]
  }), ...ngDevMode ? [{ debugName: "lineChartData" }] : []);
  lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true }
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => String(value)
        }
      }
    }
  };
  barChartData = computed(() => ({
    labels: this.topProductsLabels(),
    datasets: [
      {
        label: "Qty Sold",
        data: this.topProductsQty(),
        backgroundColor: "rgba(13,148,136,0.85)"
      }
    ]
  }), ...ngDevMode ? [{ debugName: "barChartData" }] : []);
  barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true }
    },
    scales: {
      x: { ticks: { autoSkip: false } },
      y: { beginAtZero: true }
    }
  };
  pieChartData = computed(() => ({
    labels: this.expenseBreakdownLabels(),
    datasets: [
      {
        data: this.expenseBreakdownValues(),
        backgroundColor: ["#7367d8", "#8f86e3", "#f2b45f", "#b0a9ee", "#ee8b83", "#8acb88", "#4e43a8"]
      }
    ]
  }), ...ngDevMode ? [{ debugName: "pieChartData" }] : []);
  pieChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" }
    }
  };
  constructor() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    this.loadMe();
    this.loadMyPermissions();
    const qVal = `query Val($branch: String) { inventoryValuation(branch: $branch) { totalStockValue } }`;
    this.gql.request(qVal, { branch: this.branchCtx.effective() }).subscribe({
      next: (res) => this.totalStockValue.set(res.inventoryValuation.totalStockValue),
      error: () => {
      }
    });
    const qCounts = `query DashboardCounts {
      products { id }
      categories { id }
    }`;
    this.gql.request(qCounts).subscribe({
      next: (res) => {
        this.productsCount.set(res.products.length);
        this.categoriesCount.set(res.categories.length);
      },
      error: () => {
      }
    });
    const qAlerts = `query DashboardAlerts($days: Int!, $threshold: Int!, $branch: String) {
      expiryAlerts(days: $days, branch: $branch) { productId }
      lowStockAlerts(threshold: $threshold, branch: $branch) { productId }
    }`;
    this.gql.request(qAlerts, { days: 30, threshold: 10, branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        this.expiryCount.set(res.expiryAlerts.length);
        this.lowStockCount.set(res.lowStockAlerts.length);
      },
      error: () => {
      }
    });
    const qMovements = `query RecentMovements {
      stockMovements {
        id type quantity createdAt sku productName
      }
    }`;
    this.gql.request(qMovements).subscribe({
      next: (res) => {
        this.recentMovements.set(res.stockMovements.slice(0, 8));
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load dashboard");
        this.loading.set(false);
      }
    });
  }
  loadMe() {
    const query = `query Me { me { id name email roles } }`;
    this.gql.request(query).subscribe({
      next: (res) => this.me.set(res.me),
      error: () => this.me.set(null)
    });
  }
  loadMyPermissions() {
    const query = `query MyPermissions { myPermissions { module canView canCreate canEdit canDelete } }`;
    this.gql.request(query).subscribe({
      next: (res) => {
        this.myPermissions.set(res.myPermissions ?? []);
        if (this.canView("REPORTS"))
          this.loadProfit();
      },
      error: () => this.myPermissions.set([])
    });
  }
  addDaysIso(dateIso, days) {
    const d = /* @__PURE__ */ new Date(`${dateIso}T00:00:00Z`);
    d.setUTCDate(d.getUTCDate() + days);
    const yyyy = d.getUTCFullYear();
    const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(d.getUTCDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  loadProfit() {
    if (!this.canView("REPORTS"))
      return;
    this.profitLoading.set(true);
    this.profitError.set(null);
    const raw = this.selectedDateForm.getRawValue();
    const date = String(raw.date ?? "").trim();
    if (!date) {
      this.profitLoading.set(false);
      return;
    }
    const qDaily = `query DailySales($date: String!) {
      dailySalesReport(date: $date) {
        date
        totalSalesAmount
        totalProfitAmount
        items { productId sku productName quantitySold salesAmount costAmount profitAmount }
      }
    }`;
    const qExpenses = `query Expenses($filter: ExpenseFilter) {
      expenses(filter: $filter) {
        id date amount paymentMethod createdAt createdBy
        description
        category { id name active }
      }
    }`;
    const from7 = this.addDaysIso(date, -6);
    const last7Dates = Array.from({ length: 7 }).map((_, i) => this.addDaysIso(date, i - 6));
    const dailyReq = this.gql.request(qDaily, { date });
    const expensesReq = this.gql.request(qExpenses, { filter: { from: from7, to: date } });
    const last7DailyReqs = last7Dates.map((d) => this.gql.request(qDaily, { date: d }));
    forkJoin({
      daily: dailyReq,
      expenses: expensesReq,
      last7: forkJoin(last7DailyReqs)
    }).subscribe({
      next: ({ daily, expenses, last7 }) => {
        const report = daily.dailySalesReport;
        this.todaySales.set(Number(report?.totalSalesAmount ?? 0));
        this.grossProfit.set(Number(report?.totalProfitAmount ?? 0));
        const expList = expenses.expenses ?? [];
        const expensesForDay = expList.filter((e) => String(e.date ?? "") === date);
        const expTotalToday = expensesForDay.reduce((sum, e) => sum + Number(e.amount ?? 0), 0);
        this.expensesToday.set(expTotalToday);
        const top = [...report?.items ?? []].sort((a, b) => Number(b.quantitySold ?? 0) - Number(a.quantitySold ?? 0)).slice(0, 10);
        this.topProductsLabels.set(top.map((x) => x.productName));
        this.topProductsQty.set(top.map((x) => Number(x.quantitySold ?? 0)));
        const breakdown = /* @__PURE__ */ new Map();
        for (const e of expensesForDay) {
          const name = String(e.category?.name ?? "Other");
          breakdown.set(name, (breakdown.get(name) ?? 0) + Number(e.amount ?? 0));
        }
        const breakdownSorted = Array.from(breakdown.entries()).sort((a, b) => b[1] - a[1]).slice(0, 7);
        this.expenseBreakdownLabels.set(breakdownSorted.map((x) => x[0]));
        this.expenseBreakdownValues.set(breakdownSorted.map((x) => x[1]));
        const profits = (last7 ?? []).map((r, idx) => {
          const d = last7Dates[idx];
          const salesProfit = Number(r?.dailySalesReport?.totalProfitAmount ?? 0);
          const expTotal = expList.filter((e) => String(e.date ?? "") === d).reduce((sum, e) => sum + Number(e.amount ?? 0), 0);
          return salesProfit - expTotal;
        });
        this.profit7DaysLabels.set(last7Dates);
        this.profit7DaysData.set(profits);
        this.profitLoading.set(false);
      },
      error: (e) => {
        this.profitError.set(e instanceof Error ? e.message : "Failed to load profit");
        this.profitLoading.set(false);
      }
    });
  }
  formatCurrency(value) {
    if (value == null)
      return "-";
    return value.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  barWidth(value, max) {
    if (max <= 0)
      return "0%";
    const pct = Math.max(0, Math.min(100, Math.round(value / max * 100)));
    return `${pct}%`;
  }
  static \u0275fac = function DashboardPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardPage, selectors: [["cis-dashboard-page"]], decls: 96, vars: 48, consts: [[1, "flex", "items-center"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-1", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "cis-stat-grid", "mt-4", "grid", "grid-cols-1", "gap-4", "md:grid-cols-2", "xl:grid-cols-4"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-xs", "font-semibold", "text-slate-500", "dark:text-slate-400"], [1, "mt-2", "text-2xl", "font-extrabold", "text-slate-900", "dark:text-slate-100"], [1, "mt-1", "text-xs", "text-slate-600", "dark:text-slate-400"], ["class", "mt-6", 4, "ngIf"], [1, "mt-4", "grid", "grid-cols-1", "gap-4", "xl:grid-cols-2"], [1, "flex", "items-center", "justify-between"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], ["routerLink", "/expiry-alerts", 1, "text-sm", "font-semibold", "text-pink-500", "dark:text-pink-400", "hover:underline"], [1, "mt-3", "grid", "gap-3"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "font-semibold", "text-slate-700", "dark:text-slate-300"], [1, "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-2", "h-2", "w-full", "overflow-hidden", "rounded-full", "bg-slate-100", "dark:bg-slate-700"], [1, "h-full", "bg-amber-500"], [1, "h-full", "bg-[#B81104]"], ["class", "text-xs text-slate-600 dark:text-slate-400", 4, "ngIf"], ["routerLink", "/stock-movements", 1, "text-sm", "font-semibold", "text-pink-500", "dark:text-pink-400", "hover:underline"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngIf"], [1, "mt-6"], [1, "mt-1", "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "flex", "items-center", "gap-2", 3, "ngSubmit", "formGroup"], ["type", "date", "formControlName", "date", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-3", "py-2", "text-xs", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "cis-stat-grid", "mt-4", "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2", "lg:grid-cols-4"], ["data-tone", "blue", 1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "mt-1", "text-2xl", "font-extrabold", "text-slate-900", "dark:text-slate-100"], ["data-tone", "violet", 1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "rounded-2xl", "p-4", "shadow-sm", "ring-1", 3, "ngClass"], [1, "text-xs", "font-bold", 3, "ngClass"], [1, "mt-1", "text-2xl", "font-extrabold", 3, "ngClass"], [1, "mt-1", "text-xs", 3, "ngClass"], [1, "mt-6", "grid", "grid-cols-1", "gap-4", "lg:grid-cols-4"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700", "lg:col-span-2"], [1, "mt-3"], ["baseChart", "", 3, "type", "data", "options"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "text-xs", "text-slate-600", "dark:text-slate-400"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2"], [1, "rounded-full", "px-2", "py-1", "text-xs", "font-semibold"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-xs", "text-slate-600", "dark:text-slate-400"], ["colspan", "5", 1, "px-3", "py-4", "text-center", "text-sm", "text-slate-600", "dark:text-slate-400"]], template: function DashboardPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2", 1);
      \u0275\u0275text(3, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275text(5, "System overview & quick insights");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 3)(7, "section", 4)(8, "div", 5);
      \u0275\u0275text(9, "Total Stock Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275text(13, "Inventory valuation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "section", 4)(15, "div", 5);
      \u0275\u0275text(16, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 6);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7);
      \u0275\u0275text(20, "Total registered products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "section", 4)(22, "div", 5);
      \u0275\u0275text(23, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 6);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 7);
      \u0275\u0275text(27, "In database");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "section", 4)(29, "div", 5);
      \u0275\u0275text(30, "Alerts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 6);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 7);
      \u0275\u0275text(34, "Expiry (30d) + Low stock (10)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(35, DashboardPage_div_35_Template, 70, 57, "div", 8);
      \u0275\u0275elementStart(36, "div", 9)(37, "section", 4)(38, "div", 10)(39, "h3", 11);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 12);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 13)(46, "div")(47, "div", 14)(48, "div", 15);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 16);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 17);
      \u0275\u0275element(54, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div")(56, "div", 14)(57, "div", 15);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 16);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 17);
      \u0275\u0275element(63, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(64, DashboardPage_div_64_Template, 3, 3, "div", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "section", 4)(66, "div", 10)(67, "h3", 11);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "a", 21);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(73, DashboardPage_div_73_Template, 2, 1, "div", 22);
      \u0275\u0275elementStart(74, "div", 23)(75, "table", 24)(76, "thead", 25)(77, "tr")(78, "th", 26);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 26);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 26);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 26);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 26);
      \u0275\u0275text(91);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "tbody");
      \u0275\u0275template(94, DashboardPage_tr_94_Template, 12, 17, "tr", 27)(95, DashboardPage_tr_95_Template, 4, 3, "tr", 28);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", ctx.formatCurrency(ctx.totalStockValue()), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.productsCount());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.categoriesCount());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.expiryCount() + ctx.lowStockCount());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.canView("REPORTS"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 26, "common.alertsBreakdown"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 28, "common.view"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 30, "common.expiry30Days"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.expiryCount());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.barWidth(ctx.expiryCount(), ctx.expiryCount() + ctx.lowStockCount()));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 32, "common.lowStockThreshold10"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.lowStockCount());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.barWidth(ctx.lowStockCount(), ctx.expiryCount() + ctx.lowStockCount()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expiryCount() + ctx.lowStockCount() === 0);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 34, "common.recentStockMovements"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 36, "common.view"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 38, "common.type"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 40, "common.sku"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 42, "common.product"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 44, "common.qty"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 46, "common.time"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.recentMovements());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.recentMovements().length);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, BaseChartDirective, MoneyPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardPage, [{
    type: Component,
    args: [{ selector: "cis-dashboard-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, BaseChartDirective, MoneyPipe, TranslatePipe], template: `<div class="flex items-center">\r
  <div>\r
    <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Dashboard</h2>\r
    <div class="mt-1 text-sm text-slate-600 dark:text-slate-400">System overview & quick insights</div>\r
  </div>\r
</div>\r
\r
<div class="cis-stat-grid mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Total Stock Value</div>\r
    <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">\r
      {{ formatCurrency(totalStockValue()) }}\r
    </div>\r
    <div class="mt-1 text-xs text-slate-600 dark:text-slate-400">Inventory valuation</div>\r
  </section>\r
\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Products</div>\r
    <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ productsCount() }}</div>\r
    <div class="mt-1 text-xs text-slate-600 dark:text-slate-400">Total registered products</div>\r
  </section>\r
\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Categories</div>\r
    <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ categoriesCount() }}</div>\r
    <div class="mt-1 text-xs text-slate-600 dark:text-slate-400">In database</div>\r
  </section>\r
\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Alerts</div>\r
    <div class="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ expiryCount() + lowStockCount() }}</div>\r
    <div class="mt-1 text-xs text-slate-600 dark:text-slate-400">Expiry (30d) + Low stock (10)</div>\r
  </section>\r
</div>\r
\r
<div class="mt-6" *ngIf="canView('REPORTS')">\r
  <div class="flex items-center justify-between">\r
    <div>\r
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">Profit Review</h3>\r
      <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">Sales profit minus daily expenses</div>\r
    </div>\r
\r
    <form class="flex items-center gap-2" [formGroup]="selectedDateForm" (ngSubmit)="loadProfit()">\r
      <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="date" formControlName="date" />\r
      <button\r
        type="button"\r
        class="rounded-xl bg-pink-500 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
        (click)="loadProfit()"\r
        [disabled]="profitLoading()"\r
      >\r
        {{ 'common.refresh' | translate }}\r
      </button>\r
    </form>\r
  </div>\r
\r
  <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="profitError()">{{ profitError() }}</div>\r
\r
  <div class="cis-stat-grid mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">\r
    <div data-tone="blue" class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
      <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">{{ 'common.todaySales' | translate }}</div>\r
      <div class="mt-1 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ todaySales() | money }}</div>\r
    </div>\r
\r
    <div data-tone="violet" class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
      <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">{{ 'common.grossProfit' | translate }}</div>\r
      <div class="mt-1 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ grossProfit() | money}}</div>\r
      <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">(From stock movements)</div>\r
    </div>\r
\r
    <div class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
      <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">{{ 'common.expensesToday' | translate }}</div>\r
      <div class="mt-1 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ expensesToday() | money}}</div>\r
    </div>\r
\r
    <div\r
      class="rounded-2xl p-4 shadow-sm ring-1"\r
      [ngClass]="netProfitIsPositive() ? 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-900/10 ring-emerald-300/60 dark:ring-emerald-700' : 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-900/10 ring-red-300/60 dark:ring-red-700'"\r
    >\r
      <div class="text-xs font-bold" [ngClass]="netProfitIsPositive() ? 'text-emerald-700 dark:text-emerald-400' : 'text-[#B81104] dark:text-red-400'">{{ 'common.netProfit' | translate }}</div>\r
      <div class="mt-1 text-2xl font-extrabold" [ngClass]="netProfitIsPositive() ? 'text-emerald-800 dark:text-emerald-300' : 'text-red-800 dark:text-red-300'">\r
        {{ netProfit() | money }}\r
      </div>\r
      <div class="mt-1 text-xs" [ngClass]="netProfitIsPositive() ? 'text-emerald-700 dark:text-emerald-400' : 'text-[#B81104] dark:text-red-400'">\r
        {{ netProfitIsPositive() ? ('common.profitPositive' | translate) : ('common.lossNegative' | translate) }}\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-4">\r
    <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 lg:col-span-2">\r
      <div class="flex items-center justify-between">\r
        <h4 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.last7DaysProfit' | translate }}</h4>\r
      </div>\r
      <div class="mt-3">\r
        <canvas baseChart [type]="'line'" [data]="lineChartData()" [options]="lineChartOptions"></canvas>\r
      </div>\r
    </section>\r
\r
    <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
      <div class="flex items-center justify-between">\r
        <h4 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.topSellingProducts' | translate }}</h4>\r
      </div>\r
      <div class="mt-3">\r
        <canvas baseChart [type]="'bar'" [data]="barChartData()" [options]="barChartOptions"></canvas>\r
      </div>\r
    </section>\r
\r
    <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
      <div class="flex items-center justify-between">\r
        <h4 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.expenseBreakdown' | translate }}</h4>\r
      </div>\r
      <div class="mt-3">\r
        <canvas baseChart [type]="'pie'" [data]="pieChartData()" [options]="pieChartOptions"></canvas>\r
      </div>\r
    </section>\r
  </div>\r
</div>\r
\r
<div class="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="flex items-center justify-between">\r
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.alertsBreakdown' | translate }}</h3>\r
      <a class="text-sm font-semibold text-pink-500 dark:text-pink-400 hover:underline" routerLink="/expiry-alerts">{{ 'common.view' | translate }}</a>\r
    </div>\r
\r
    <div class="mt-3 grid gap-3">\r
      <div>\r
        <div class="flex items-center justify-between text-sm">\r
          <div class="font-semibold text-slate-700 dark:text-slate-300">{{ 'common.expiry30Days' | translate }}</div>\r
          <div class="font-semibold text-slate-900 dark:text-slate-100">{{ expiryCount() }}</div>\r
        </div>\r
        <div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">\r
          <div\r
            class="h-full bg-amber-500"\r
            [style.width]="barWidth(expiryCount(), expiryCount() + lowStockCount())"\r
          ></div>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <div class="flex items-center justify-between text-sm">\r
          <div class="font-semibold text-slate-700 dark:text-slate-300">{{ 'common.lowStockThreshold10' | translate }}</div>\r
          <div class="font-semibold text-slate-900 dark:text-slate-100">{{ lowStockCount() }}</div>\r
        </div>\r
        <div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">\r
          <div\r
            class="h-full bg-[#B81104]"\r
            [style.width]="barWidth(lowStockCount(), expiryCount() + lowStockCount())"\r
          ></div>\r
        </div>\r
      </div>\r
\r
      <div class="text-xs text-slate-600 dark:text-slate-400" *ngIf="(expiryCount() + lowStockCount()) === 0">\r
        {{ 'common.noAlertsThresholds' | translate }}\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="flex items-center justify-between">\r
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.recentStockMovements' | translate }}</h3>\r
      <a class="text-sm font-semibold text-pink-500 dark:text-pink-400 hover:underline" routerLink="/stock-movements">{{ 'common.view' | translate }}</a>\r
    </div>\r
\r
    <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
\r
    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
      <table class="w-full border-collapse text-sm">\r
        <thead class="bg-slate-50 dark:bg-slate-700">\r
          <tr>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.type' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.sku' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.qty' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.time' | translate }}</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let m of recentMovements()" class="border-t border-slate-100 dark:border-slate-700">\r
            <td class="px-3 py-2">\r
              <span\r
                class="rounded-full px-2 py-1 text-xs font-semibold"\r
                [class.bg-[#FFFACD]]="m.type === 'IN'"\r
                [class.text-emerald-800]="m.type === 'IN'"\r
                [class.bg-[#B81104]/10]="m.type === 'OUT'"\r
                [class.text-red-800]="m.type === 'OUT'"\r
                [class.bg-slate-100]="m.type !== 'IN' && m.type !== 'OUT'"\r
                [class.text-slate-700]="m.type !== 'IN' && m.type !== 'OUT'"\r
              >\r
                {{ m.type }}\r
              </span>\r
            </td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ m.sku }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ m.productName }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ m.quantity }}</td>\r
            <td class="px-3 py-2 text-xs text-slate-600 dark:text-slate-400">{{ m.createdAt }}</td>\r
          </tr>\r
          <tr *ngIf="!recentMovements().length" class="border-t border-slate-100 dark:border-slate-700">\r
            <td class="px-3 py-4 text-center text-sm text-slate-600 dark:text-slate-400" colspan="5">{{ 'common.noMovementsYet' | translate }}</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </section>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardPage, { className: "DashboardPage", filePath: "app/features/dashboard/dashboard.page.ts", lineNumber: 110 });
})();

// src/app/features/products/product-form/product-form.component.ts
var _c04 = () => ({ standalone: true });
function ProductFormComponent_button_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 15);
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_button_2__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_button_2__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ProductFormComponent_button_2_Template_button_click_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab(i_r2));
    });
    \u0275\u0275template(1, ProductFormComponent_button_2__svg_svg_1_Template, 2, 0, "svg", 13)(2, ProductFormComponent_button_2__svg_svg_2_Template, 2, 0, "svg", 13)(3, ProductFormComponent_button_2__svg_svg_3_Template, 2, 0, "svg", 13);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-white", ctx_r2.activeTab() === i_r2)("text-primary-700", ctx_r2.activeTab() === i_r2)("shadow-sm", ctx_r2.activeTab() === i_r2)("dark:bg-slate-800", ctx_r2.activeTab() === i_r2)("dark:text-primary-300", ctx_r2.activeTab() === i_r2)("text-slate-500", ctx_r2.activeTab() !== i_r2)("dark:text-slate-400", ctx_r2.activeTab() !== i_r2);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeTab() === i_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r2 === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r2 === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r2 === 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r4);
  }
}
function ProductFormComponent_div_3_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("value", c_r6.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.name);
  }
}
function ProductFormComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "label", 20);
    \u0275\u0275text(3, " SKU ");
    \u0275\u0275element(4, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 20);
    \u0275\u0275text(6, " Product Name ");
    \u0275\u0275element(7, "input", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 20)(9, "span");
    \u0275\u0275text(10, "Barcode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275element(12, "input", 23);
    \u0275\u0275elementStart(13, "button", 24);
    \u0275\u0275listener("click", function ProductFormComponent_div_3_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scannerOpen = true);
    });
    \u0275\u0275text(14, " Scan ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 19)(16, "label", 20);
    \u0275\u0275text(17, " Category ");
    \u0275\u0275elementStart(18, "select", 25)(19, "option", 26);
    \u0275\u0275text(20, "Select category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ProductFormComponent_div_3_option_21_Template, 2, 2, "option", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label", 20);
    \u0275\u0275text(23, " Brand ");
    \u0275\u0275element(24, "input", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 19)(26, "label", 20);
    \u0275\u0275text(27, " Variant ");
    \u0275\u0275element(28, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "label", 20);
    \u0275\u0275text(30, " Batch Number ");
    \u0275\u0275element(31, "input", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 31)(33, "label", 20);
    \u0275\u0275text(34, " Expiry Date ");
    \u0275\u0275element(35, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "label", 20);
    \u0275\u0275text(37, " Location ");
    \u0275\u0275element(38, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label", 20);
    \u0275\u0275text(40, " Initial Quantity (pcs) ");
    \u0275\u0275element(41, "input", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "p", 35);
    \u0275\u0275text(43, " The product is saved as pending and becomes active for sale once it is received under Purchasing. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.categories);
  }
}
function ProductFormComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 20);
    \u0275\u0275text(4, " Buying Price (TZS) ");
    \u0275\u0275element(5, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 20);
    \u0275\u0275text(7, " Selling Price (TZS) ");
    \u0275\u0275element(8, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 20);
    \u0275\u0275text(10, " Quantity (pcs) ");
    \u0275\u0275element(11, "input", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tier_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tier_r7.label);
    \u0275\u0275advance(3);
    \u0275\u0275property("formControlName", ctx_r2.tierControlName(tier_r7, "BuyingPrice"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formControlName", ctx_r2.tierControlName(tier_r7, "SellingPrice"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formControlName", ctx_r2.tierControlName(tier_r7, "Quantity"))("placeholder", tier_r7.defaultQuantity != null ? "" + tier_r7.defaultQuantity : "pcs per " + tier_r7.label.toLowerCase());
  }
}
function ProductFormComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, ProductFormComponent_div_4_div_1_Template, 12, 5, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.tiers);
  }
}
function ProductFormComponent_div_5_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r9 = ctx.$implicit;
    \u0275\u0275property("value", m_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r9);
  }
}
function ProductFormComponent_div_5_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ProductFormComponent_div_5_div_14_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newMeasure, $event) || (ctx_r2.newMeasure = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 24);
    \u0275\u0275listener("click", function ProductFormComponent_div_5_div_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addMeasure());
    });
    \u0275\u0275text(3, " Add ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMeasure);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(3, _c04));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.newMeasure.trim());
  }
}
function ProductFormComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div")(2, "div", 42);
    \u0275\u0275text(3, "Product Measure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 43);
    \u0275\u0275text(5, "Define how this product is measured and packaged");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20)(7, "span");
    \u0275\u0275text(8, "Measure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7)(10, "select", 44);
    \u0275\u0275listener("change", function ProductFormComponent_div_5_Template_select_change_10_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMeasureSelect($event.target.value));
    });
    \u0275\u0275template(11, ProductFormComponent_div_5_option_11_Template, 2, 2, "option", 27);
    \u0275\u0275elementStart(12, "option", 45);
    \u0275\u0275text(13, "+ Add new measure");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(14, ProductFormComponent_div_5_div_14_Template, 4, 4, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r2.addingMeasure() ? "__add" : ctx_r2.form.controls.unitOfMeasure.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.measureOptions());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.addingMeasure());
  }
}
function ProductFormComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function ProductFormComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ProductFormComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevTab());
    });
    \u0275\u0275text(1, " Back ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.loading);
  }
}
function ProductFormComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function ProductFormComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextTab());
    });
    \u0275\u0275text(1, " Next ");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.form.invalid || ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.loading ? "Saving..." : "Save Product", " ");
  }
}
var ProductFormComponent = class _ProductFormComponent {
  categories = [];
  loading = false;
  error = null;
  open = false;
  submitted = new EventEmitter();
  cancel = new EventEmitter();
  scannerOpen = false;
  activeTab = signal(0, ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  tabs = ["Basic Info", "Pricing", "Measure"];
  tiers = [
    { key: "piece", label: "Piece Pricing", defaultQuantity: 1 },
    { key: "halfDozen", label: "Half Dozen", defaultQuantity: 6 },
    { key: "dozen", label: "Dozen", defaultQuantity: 12 },
    { key: "carton", label: "Carton", defaultQuantity: null }
  ];
  measureOptions = signal([
    "pcs",
    "piece",
    "half dozen",
    "dozen",
    "carton",
    "box",
    "bottle",
    "tube",
    "set",
    "pack",
    "ml",
    "g",
    "kg",
    "L"
  ], ...ngDevMode ? [{ debugName: "measureOptions" }] : []);
  addingMeasure = signal(false, ...ngDevMode ? [{ debugName: "addingMeasure" }] : []);
  newMeasure = "";
  fb = inject(FormBuilder);
  form = this.fb.group({
    sku: ["", [Validators.required]],
    barcode: [""],
    name: ["", [Validators.required]],
    brand: [""],
    category: [""],
    variant: [""],
    batchNumber: [""],
    expiryDate: [""],
    location: [""],
    initialQuantity: [null, [Validators.required, Validators.min(1)]],
    pieceBuyingPrice: [null],
    pieceSellingPrice: [null],
    pieceQuantity: [1],
    halfDozenBuyingPrice: [null],
    halfDozenSellingPrice: [null],
    halfDozenQuantity: [6],
    dozenBuyingPrice: [null],
    dozenSellingPrice: [null],
    dozenQuantity: [12],
    cartonBuyingPrice: [null],
    cartonSellingPrice: [null],
    cartonQuantity: [null],
    unitOfMeasure: ["pcs"]
  });
  ngOnChanges(changes) {
    if (changes["open"]?.currentValue === true) {
      this.activeTab.set(0);
      this.addingMeasure.set(false);
      this.newMeasure = "";
      this.form.reset({
        sku: "",
        barcode: "",
        name: "",
        brand: "",
        category: "",
        variant: "",
        batchNumber: "",
        expiryDate: "",
        location: "",
        initialQuantity: null,
        pieceBuyingPrice: null,
        pieceSellingPrice: null,
        pieceQuantity: 1,
        halfDozenBuyingPrice: null,
        halfDozenSellingPrice: null,
        halfDozenQuantity: 6,
        dozenBuyingPrice: null,
        dozenSellingPrice: null,
        dozenQuantity: 12,
        cartonBuyingPrice: null,
        cartonSellingPrice: null,
        cartonQuantity: null,
        unitOfMeasure: "pcs"
      });
    }
  }
  setTab(index) {
    this.activeTab.set(index);
  }
  nextTab() {
    if (this.activeTab() < this.tabs.length - 1)
      this.activeTab.set(this.activeTab() + 1);
  }
  prevTab() {
    if (this.activeTab() > 0)
      this.activeTab.set(this.activeTab() - 1);
  }
  onMeasureSelect(value) {
    if (value === "__add") {
      this.addingMeasure.set(true);
      this.newMeasure = "";
      return;
    }
    this.addingMeasure.set(false);
    this.form.controls.unitOfMeasure.setValue(value);
  }
  addMeasure() {
    const value = this.newMeasure.trim();
    if (!value)
      return;
    if (!this.measureOptions().some((o) => o.toLowerCase() === value.toLowerCase())) {
      this.measureOptions.update((list) => [...list, value]);
    }
    this.form.controls.unitOfMeasure.setValue(value);
    this.addingMeasure.set(false);
    this.newMeasure = "";
  }
  onBarcodeScanned(code) {
    this.form.controls.barcode.setValue(code);
    this.scannerOpen = false;
  }
  tierControlName(tier, field) {
    return `${tier.key}${field}`;
  }
  collectUnits() {
    const raw = this.form.getRawValue();
    const tierNames = {
      piece: "Piece",
      halfDozen: "Half Dozen",
      dozen: "Dozen",
      carton: "Carton"
    };
    const units = [];
    for (const tier of this.tiers) {
      const price = raw[`${tier.key}SellingPrice`];
      const buyingPrice = raw[`${tier.key}BuyingPrice`];
      const quantity = raw[`${tier.key}Quantity`];
      if (price == null && buyingPrice == null && (quantity == null || quantity <= 0))
        continue;
      units.push({
        name: tierNames[tier.key],
        price,
        buyingPrice,
        quantity: quantity != null && quantity > 0 ? quantity : tier.defaultQuantity
      });
    }
    return units;
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      if (!this.form.controls.sku.valid || !this.form.controls.name.valid) {
        this.activeTab.set(0);
      }
      return;
    }
    const raw = this.form.getRawValue();
    this.submitted.emit({
      sku: raw.sku ?? "",
      barcode: raw.barcode ?? "",
      name: raw.name ?? "",
      brand: raw.brand ?? "",
      category: raw.category ?? "",
      variant: raw.variant ?? "",
      unitOfMeasure: raw.unitOfMeasure ?? "",
      buyingPrice: raw.pieceBuyingPrice ?? null,
      sellingPrice: raw.pieceSellingPrice ?? null,
      batchNumber: raw.batchNumber ?? "",
      expiryDate: raw.expiryDate ?? "",
      location: raw.location ?? "",
      initialQuantity: raw.initialQuantity ?? null,
      units: this.collectUnits()
    });
  }
  onCancel() {
    this.cancel.emit();
  }
  static \u0275fac = function ProductFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductFormComponent, selectors: [["cis-product-form"]], inputs: { categories: "categories", loading: "loading", error: "error", open: "open" }, outputs: { submitted: "submitted", cancel: "cancel" }, features: [\u0275\u0275NgOnChangesFeature], decls: 15, vars: 11, consts: [[1, "grid", "gap-4", 3, "ngSubmit", "formGroup"], ["role", "tablist", 1, "flex", "gap-1", "rounded-xl", "bg-slate-100", "p-1", "dark:bg-slate-700/60"], ["type", "button", "role", "tab", "class", "flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors sm:text-sm", 3, "bg-white", "text-primary-700", "shadow-sm", "dark:bg-slate-800", "dark:text-primary-300", "text-slate-500", "dark:text-slate-400", "click", 4, "ngFor", "ngForOf"], ["class", "grid gap-3", 4, "ngIf"], ["class", "text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-2", "flex", "justify-between", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "flex", "gap-2"], ["class", "rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70", "type", "button", 3, "click", 4, "ngIf"], ["class", "rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70", "type", "submit", 3, "disabled", 4, "ngIf"], ["title", "Scan product barcode", 3, "scanned", "close", "open"], ["type", "button", "role", "tab", 1, "flex", "flex-1", "items-center", "justify-center", "gap-1.5", "rounded-lg", "px-3", "py-2", "text-xs", "font-semibold", "transition-colors", "sm:text-sm", 3, "click"], ["class", "h-4 w-4 shrink-0", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.8", 4, "ngIf"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.8", 1, "h-4", "w-4", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7 7h.01M7 3h5.586a1 1 0 01.707.293l7.414 7.414a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0L7.293 9.293A1 1 0 017 8.586V3z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 17l6.5-6.5M3 21h18M3 17v4m0-4l4.5 4M7.5 12.5l3-3m0 0l2 2m-2-2l6.5-6.5a1.414 1.414 0 012 2l-6.5 6.5-2-2z"], [1, "grid", "gap-3"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], ["formControlName", "sku", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["formControlName", "name", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["formControlName", "barcode", 1, "min-w-0", "flex-1", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["type", "button", 1, "shrink-0", "rounded-xl", "bg-primary-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], ["formControlName", "category", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "brand", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["formControlName", "variant", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["formControlName", "batchNumber", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-3"], ["type", "date", "formControlName", "expiryDate", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["formControlName", "location", "placeholder", "MAIN", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["type", "number", "min", "1", "formControlName", "initialQuantity", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], [3, "value"], ["class", "grid gap-3 rounded-xl ring-1 ring-slate-100 p-3 dark:ring-slate-700 sm:grid-cols-[1fr_1fr_1fr_1fr] sm:items-end", 4, "ngFor", "ngForOf"], [1, "grid", "gap-3", "rounded-xl", "ring-1", "ring-slate-100", "p-3", "dark:ring-slate-700", "sm:grid-cols-[1fr_1fr_1fr_1fr]", "sm:items-end"], [1, "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200"], ["type", "number", "min", "0", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]", 3, "formControlName"], ["type", "number", "min", "1", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]", 3, "formControlName", "placeholder"], [1, "text-sm", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-1", "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "min-w-0", "flex-1", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]", 3, "change", "value"], ["value", "__add"], ["class", "flex gap-2", 4, "ngIf"], ["placeholder", "e.g. tray, sack", 1, "min-w-0", "flex-1", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "text-sm", "text-[#B81104]", "dark:text-red-400"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "disabled"]], template: function ProductFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function ProductFormComponent_Template_form_ngSubmit_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275template(2, ProductFormComponent_button_2_Template, 6, 19, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ProductFormComponent_div_3_Template, 44, 2, "div", 3)(4, ProductFormComponent_div_4_Template, 2, 1, "div", 3)(5, ProductFormComponent_div_5_Template, 15, 3, "div", 3)(6, ProductFormComponent_div_6_Template, 2, 1, "div", 4);
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function ProductFormComponent_Template_button_click_8_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(9, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275template(11, ProductFormComponent_button_11_Template, 2, 1, "button", 8)(12, ProductFormComponent_button_12_Template, 2, 0, "button", 9)(13, ProductFormComponent_button_13_Template, 2, 2, "button", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "cis-barcode-scanner", 11);
      \u0275\u0275listener("scanned", function ProductFormComponent_Template_cis_barcode_scanner_scanned_14_listener($event) {
        return ctx.onBarcodeScanned($event);
      })("close", function ProductFormComponent_Template_cis_barcode_scanner_close_14_listener() {
        return ctx.scannerOpen = false;
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab() === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab() === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab() === 2);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.activeTab() > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab() < ctx.tabs.length - 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab() === ctx.tabs.length - 1);
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.scannerOpen);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, BarcodeScannerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductFormComponent, [{
    type: Component,
    args: [{ selector: "cis-product-form", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, BarcodeScannerComponent], template: `<form class="grid gap-4" [formGroup]="form" (ngSubmit)="submit()">
  <div class="flex gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-700/60" role="tablist">
    <button
      *ngFor="let tab of tabs; let i = index"
      type="button"
      role="tab"
      [attr.aria-selected]="activeTab() === i"
      class="flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors sm:text-sm"
      [class.bg-white]="activeTab() === i"
      [class.text-primary-700]="activeTab() === i"
      [class.shadow-sm]="activeTab() === i"
      [class.dark:bg-slate-800]="activeTab() === i"
      [class.dark:text-primary-300]="activeTab() === i"
      [class.text-slate-500]="activeTab() !== i"
      [class.dark:text-slate-400]="activeTab() !== i"
      (click)="setTab(i)"
    >
      <svg *ngIf="i === 0" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <svg *ngIf="i === 1" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5.586a1 1 0 01.707.293l7.414 7.414a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0L7.293 9.293A1 1 0 017 8.586V3z" />
      </svg>
      <svg *ngIf="i === 2" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 17l6.5-6.5M3 21h18M3 17v4m0-4l4.5 4M7.5 12.5l3-3m0 0l2 2m-2-2l6.5-6.5a1.414 1.414 0 012 2l-6.5 6.5-2-2z" />
      </svg>
      <span>{{ tab }}</span>
    </button>
  </div>

  <!-- Tab 1: Basic Info -->
  <div *ngIf="activeTab() === 0" class="grid gap-3">
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        SKU
        <input
          class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          formControlName="sku"
        />
      </label>
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        Product Name
        <input
          class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          formControlName="name"
        />
      </label>
    </div>

    <div class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
      <span>Barcode</span>
      <div class="flex gap-2">
        <input
          class="min-w-0 flex-1 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          formControlName="barcode"
        />
        <button
          class="shrink-0 rounded-xl bg-primary-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
          type="button"
          (click)="scannerOpen = true"
          [disabled]="loading"
        >
          Scan
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        Category
        <select
          class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          formControlName="category"
        >
          <option value="">Select category</option>
          <option *ngFor="let c of categories" [value]="c.name">{{ c.name }}</option>
        </select>
      </label>
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        Brand
        <input
          class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          formControlName="brand"
        />
      </label>
    </div>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        Variant
        <input
          class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          formControlName="variant"
        />
      </label>
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        Batch Number
        <input
          class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          formControlName="batchNumber"
        />
      </label>
    </div>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        Expiry Date
        <input
          class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          type="date"
          formControlName="expiryDate"
        />
      </label>
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        Location
        <input
          class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          formControlName="location"
          placeholder="MAIN"
        />
      </label>
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        Initial Quantity (pcs)
        <input
          class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          type="number"
          min="1"
          formControlName="initialQuantity"
        />
      </label>
    </div>

    <p class="text-xs text-slate-500 dark:text-slate-400">
      The product is saved as pending and becomes active for sale once it is received under Purchasing.
    </p>
  </div>

  <!-- Tab 2: Pricing -->
  <div *ngIf="activeTab() === 1" class="grid gap-3">
    <div
      *ngFor="let tier of tiers"
      class="grid gap-3 rounded-xl ring-1 ring-slate-100 p-3 dark:ring-slate-700 sm:grid-cols-[1fr_1fr_1fr_1fr] sm:items-end"
    >
      <div class="text-xs font-semibold text-slate-800 dark:text-slate-200">{{ tier.label }}</div>
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        Buying Price (TZS)
        <input
          class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          type="number"
          min="0"
          [formControlName]="tierControlName(tier, 'BuyingPrice')"
        />
      </label>
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        Selling Price (TZS)
        <input
          class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          type="number"
          min="0"
          [formControlName]="tierControlName(tier, 'SellingPrice')"
        />
      </label>
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        Quantity (pcs)
        <input
          class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          type="number"
          min="1"
          [formControlName]="tierControlName(tier, 'Quantity')"
          [placeholder]="tier.defaultQuantity != null ? '' + tier.defaultQuantity : 'pcs per ' + tier.label.toLowerCase()"
        />
      </label>
    </div>
  </div>

  <!-- Tab 3: Measure -->
  <div *ngIf="activeTab() === 2" class="grid gap-3">
    <div>
      <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">Product Measure</div>
      <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">Define how this product is measured and packaged</p>
    </div>

    <div class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
      <span>Measure</span>
      <div class="flex gap-2">
        <select
          class="min-w-0 flex-1 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          [value]="addingMeasure() ? '__add' : form.controls.unitOfMeasure.value"
          (change)="onMeasureSelect(($any($event.target)).value)"
        >
          <option *ngFor="let m of measureOptions()" [value]="m">{{ m }}</option>
          <option value="__add">+ Add new measure</option>
        </select>
      </div>
    </div>

    <div *ngIf="addingMeasure()" class="flex gap-2">
      <input
        class="min-w-0 flex-1 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
        [(ngModel)]="newMeasure"
        [ngModelOptions]="{ standalone: true }"
        placeholder="e.g. tray, sack"
      />
      <button
        class="shrink-0 rounded-xl bg-primary-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
        type="button"
        (click)="addMeasure()"
        [disabled]="!newMeasure.trim()"
      >
        Add
      </button>
    </div>
  </div>

  <div class="text-sm text-[#B81104] dark:text-red-400" *ngIf="error">{{ error }}</div>

  <div class="mt-2 flex justify-between gap-2">
    <button
      class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70"
      type="button"
      (click)="onCancel()"
      [disabled]="loading"
    >
      Cancel
    </button>

    <div class="flex gap-2">
      <button
        *ngIf="activeTab() > 0"
        class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70"
        type="button"
        (click)="prevTab()"
        [disabled]="loading"
      >
        Back
      </button>
      <button
        *ngIf="activeTab() < tabs.length - 1"
        class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
        type="button"
        (click)="nextTab()"
      >
        Next
      </button>
      <button
        *ngIf="activeTab() === tabs.length - 1"
        class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
        type="submit"
        [disabled]="form.invalid || loading"
      >
        {{ loading ? 'Saving...' : 'Save Product' }}
      </button>
    </div>
  </div>

  <cis-barcode-scanner
    [open]="scannerOpen"
    title="Scan product barcode"
    (scanned)="onBarcodeScanned($event)"
    (close)="scannerOpen = false"
  />
</form>
` }]
  }], null, { categories: [{
    type: Input,
    args: [{ required: true }]
  }], loading: [{
    type: Input
  }], error: [{
    type: Input
  }], open: [{
    type: Input
  }], submitted: [{
    type: Output
  }], cancel: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductFormComponent, { className: "ProductFormComponent", filePath: "app/features/products/product-form/product-form.component.ts", lineNumber: 49 });
})();

// src/app/features/products/products.page.ts
function ProductsPage_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ProductsPage_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 3, "common.add"), " ", \u0275\u0275pipeBind1(3, 5, "common.product"), " ");
  }
}
function ProductsPage_tr_86_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.sku, " ");
  }
}
function ProductsPage_tr_86_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "input", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
  }
}
function ProductsPage_tr_86_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.barcode || "-", " ");
  }
}
function ProductsPage_tr_86_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "input", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
  }
}
function ProductsPage_tr_86_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.latestBatchNumber(p_r3), " ");
  }
}
function ProductsPage_tr_86_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "input", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.latestBatchNumber(p_r3) === "-" ? "No batch" : "")("readOnly", ctx_r1.latestBatchNumber(p_r3) === "-");
  }
}
function ProductsPage_tr_86_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.name, " ");
  }
}
function ProductsPage_tr_86_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "input", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
  }
}
function ProductsPage_tr_86_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.brand || "-", " ");
  }
}
function ProductsPage_tr_86_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "input", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
  }
}
function ProductsPage_tr_86_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.category || "-", " ");
  }
}
function ProductsPage_tr_86_ng_template_23_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("value", c_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.name);
  }
}
function ProductsPage_tr_86_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "select", 47)(2, "option", 48);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProductsPage_tr_86_ng_template_23_option_5_Template, 2, 2, "option", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "common.selectCategory"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories());
  }
}
function ProductsPage_tr_86_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "money");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, p_r3.buyingPrice), " ");
  }
}
function ProductsPage_tr_86_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "input", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
  }
}
function ProductsPage_tr_86_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "money");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, p_r3.sellingPrice), " ");
  }
}
function ProductsPage_tr_86_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "input", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
  }
}
function ProductsPage_tr_86_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.unitOfMeasure ?? "-", " ");
  }
}
function ProductsPage_tr_86_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "input", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
  }
}
function ProductsPage_tr_86_ng_container_43_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function ProductsPage_tr_86_ng_container_43_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const p_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startEdit(p_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 56);
    \u0275\u0275element(2, "path", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.edit"), " ");
  }
}
function ProductsPage_tr_86_ng_container_43_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function ProductsPage_tr_86_ng_container_43_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activate(p_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 56);
    \u0275\u0275element(2, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.activate"), " ");
  }
}
function ProductsPage_tr_86_ng_container_43_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function ProductsPage_tr_86_ng_container_43_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const p_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.delete(p_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 56);
    \u0275\u0275element(2, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.delete"), " ");
  }
}
function ProductsPage_tr_86_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "cis-row-actions");
    \u0275\u0275template(2, ProductsPage_tr_86_ng_container_43_button_2_Template, 5, 4, "button", 53)(3, ProductsPage_tr_86_ng_container_43_button_3_Template, 5, 4, "button", 53)(4, ProductsPage_tr_86_ng_container_43_button_4_Template, 5, 4, "button", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("PRODUCTS"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("PRODUCTS") && !p_r3.active);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("PRODUCTS") && p_r3.active);
  }
}
function ProductsPage_tr_86_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "button", 62);
    \u0275\u0275listener("click", function ProductsPage_tr_86_ng_template_44_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 63);
    \u0275\u0275listener("click", function ProductsPage_tr_86_ng_template_44_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading() || ctx_r1.editForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "common.save"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "common.close"), " ");
  }
}
function ProductsPage_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 36)(1, "td", 37);
    \u0275\u0275template(2, ProductsPage_tr_86_ng_container_2_Template, 2, 1, "ng-container", 38)(3, ProductsPage_tr_86_ng_template_3_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 37);
    \u0275\u0275template(6, ProductsPage_tr_86_ng_container_6_Template, 2, 1, "ng-container", 38)(7, ProductsPage_tr_86_ng_template_7_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 37);
    \u0275\u0275template(10, ProductsPage_tr_86_ng_container_10_Template, 2, 1, "ng-container", 38)(11, ProductsPage_tr_86_ng_template_11_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 37);
    \u0275\u0275template(14, ProductsPage_tr_86_ng_container_14_Template, 2, 1, "ng-container", 38)(15, ProductsPage_tr_86_ng_template_15_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 37);
    \u0275\u0275template(18, ProductsPage_tr_86_ng_container_18_Template, 2, 1, "ng-container", 38)(19, ProductsPage_tr_86_ng_template_19_Template, 2, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 37);
    \u0275\u0275template(22, ProductsPage_tr_86_ng_container_22_Template, 2, 1, "ng-container", 38)(23, ProductsPage_tr_86_ng_template_23_Template, 6, 5, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 37);
    \u0275\u0275template(26, ProductsPage_tr_86_ng_container_26_Template, 3, 3, "ng-container", 38)(27, ProductsPage_tr_86_ng_template_27_Template, 2, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 37);
    \u0275\u0275template(30, ProductsPage_tr_86_ng_container_30_Template, 3, 3, "ng-container", 38)(31, ProductsPage_tr_86_ng_template_31_Template, 2, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 37);
    \u0275\u0275template(34, ProductsPage_tr_86_ng_container_34_Template, 2, 1, "ng-container", 38)(35, ProductsPage_tr_86_ng_template_35_Template, 2, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td", 39)(38, "span", 40);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "td", 39);
    \u0275\u0275template(43, ProductsPage_tr_86_ng_container_43_Template, 5, 3, "ng-container", 38)(44, ProductsPage_tr_86_ng_template_44_Template, 7, 8, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const editSku_r9 = \u0275\u0275reference(4);
    const editBarcode_r10 = \u0275\u0275reference(8);
    const editBatch_r11 = \u0275\u0275reference(12);
    const editName_r12 = \u0275\u0275reference(16);
    const editBrand_r13 = \u0275\u0275reference(20);
    const editCategory_r14 = \u0275\u0275reference(24);
    const editBuying_r15 = \u0275\u0275reference(28);
    const editSelling_r16 = \u0275\u0275reference(32);
    const editunitOfMeasure_r17 = \u0275\u0275reference(36);
    const editActions_r18 = \u0275\u0275reference(45);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== p_r3.id)("ngIfElse", editSku_r9);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== p_r3.id)("ngIfElse", editBarcode_r10);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== p_r3.id)("ngIfElse", editBatch_r11);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== p_r3.id)("ngIfElse", editName_r12);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== p_r3.id)("ngIfElse", editBrand_r13);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== p_r3.id)("ngIfElse", editCategory_r14);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== p_r3.id)("ngIfElse", editBuying_r15);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== p_r3.id)("ngIfElse", editSelling_r16);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== p_r3.id)("ngIfElse", editunitOfMeasure_r17);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-[#B81104]", !p_r3.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.active ? \u0275\u0275pipeBind1(40, 23, "common.active") : \u0275\u0275pipeBind1(41, 25, "common.inactive"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== p_r3.id)("ngIfElse", editActions_r18);
  }
}
function ProductsPage_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275listener("click", function ProductsPage_div_87_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelCreate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 66)(3, "div", 67)(4, "div", 10)(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 68);
    \u0275\u0275listener("click", function ProductsPage_div_87_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelCreate());
    });
    \u0275\u0275text(10, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 69)(12, "cis-product-form", 70);
    \u0275\u0275listener("submitted", function ProductsPage_div_87_Template_cis_product_form_submitted_12_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create($event));
    })("cancel", function ProductsPage_div_87_Template_cis_product_form_cancel_12_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelCreate());
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(7, 6, "common.add"), " ", \u0275\u0275pipeBind1(8, 8, "common.product"));
    \u0275\u0275advance(6);
    \u0275\u0275property("categories", ctx_r1.categories())("loading", ctx_r1.loading())("error", ctx_r1.error())("open", ctx_r1.createDialogOpen());
  }
}
function ProductsPage_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72)(2, "div", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 74);
    \u0275\u0275listener("click", function ProductsPage_div_88_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissToast());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-[#FFFACD]", ctx_r1.toastVariant() === "success")("text-emerald-900", ctx_r1.toastVariant() === "success")("ring-pink-500/25", ctx_r1.toastVariant() === "success")("bg-[#B81104]/10", ctx_r1.toastVariant() === "error")("text-red-900", ctx_r1.toastVariant() === "error")("ring-[#B81104]/25", ctx_r1.toastVariant() === "error");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.toastMessage());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 14, "common.close"));
  }
}
function ProductsPage_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275listener("click", function ProductsPage_div_89_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 66)(3, "div", 75)(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 76);
    \u0275\u0275text(8, " Are you sure you want to delete ");
    \u0275\u0275elementStart(9, "span", 77);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "? The product will be deactivated and hidden everywhere until it is reactivated. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 78)(13, "button", 79);
    \u0275\u0275listener("click", function ProductsPage_div_89_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 80);
    \u0275\u0275listener("click", function ProductsPage_div_89_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "common.delete"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.pendingDelete()) == null ? null : tmp_2_0.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 8, "common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 10, "common.delete"), " ");
  }
}
var ProductsPage = class _ProductsPage {
  gql;
  perm = inject(PermissionService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  products = signal([], ...ngDevMode ? [{ debugName: "products" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  displayedProducts = computed(() => {
    const all = this.products();
    const size = this.pageSize();
    const idx = this.pageIndex();
    const start = idx * size;
    return all.slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedProducts" }] : []);
  totalPages = computed(() => {
    const size = this.pageSize();
    const total = this.products().length;
    return Math.max(1, Math.ceil(total / size));
  }, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  statusFilter = signal("active", ...ngDevMode ? [{ debugName: "statusFilter" }] : []);
  editingId = signal(null, ...ngDevMode ? [{ debugName: "editingId" }] : []);
  editingBatchId = signal(null, ...ngDevMode ? [{ debugName: "editingBatchId" }] : []);
  editingBatchOriginalNumber = signal("", ...ngDevMode ? [{ debugName: "editingBatchOriginalNumber" }] : []);
  deleteDialogOpen = signal(false, ...ngDevMode ? [{ debugName: "deleteDialogOpen" }] : []);
  pendingDelete = signal(null, ...ngDevMode ? [{ debugName: "pendingDelete" }] : []);
  toastMessage = signal(null, ...ngDevMode ? [{ debugName: "toastMessage" }] : []);
  toastVariant = signal("success", ...ngDevMode ? [{ debugName: "toastVariant" }] : []);
  createDialogOpen = signal(false, ...ngDevMode ? [{ debugName: "createDialogOpen" }] : []);
  fb = inject(FormBuilder);
  branchCtx = inject(BranchContext);
  pendingReceiving = inject(PendingReceivingService);
  editForm = this.fb.group({
    sku: ["", [Validators.required]],
    barcode: [""],
    batchNumber: [""],
    name: ["", [Validators.required]],
    brand: [""],
    category: [""],
    variant: [""],
    unitOfMeasure: [""],
    buyingPrice: [null],
    sellingPrice: [null]
  });
  constructor(gql) {
    this.gql = gql;
    this.perm.load();
    this.loadCategories();
    this.load();
  }
  latestBatch(p) {
    const batches = p.batches ?? [];
    if (!batches.length)
      return null;
    const latest = [...batches].sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0];
    if (!latest?.id)
      return null;
    return { id: latest.id, batchNumber: latest.batchNumber };
  }
  loadCategories() {
    const query = `query Categories { categories { id name active } }`;
    this.gql.request(query).subscribe({
      next: (res) => {
        this.categories.set(res.categories.filter((c) => c.active));
      },
      error: () => {
        this.categories.set([]);
      }
    });
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const query = `query Products($filter: ProductFilter) {
      products(filter: $filter) {
        id
        sku
        barcode
        name
        brand
        category
        variant
        unitOfMeasure
        buyingPrice
        sellingPrice
        active
        batches { id batchNumber createdAt }
      }
    }`;
    const q = this.searchQuery().trim();
    const status = this.statusFilter();
    const variables = {
      filter: {
        query: q || null,
        active: status === "all" ? null : status === "active"
      }
    };
    this.gql.request(query, variables).subscribe({
      next: (res) => {
        this.products.set(res.products);
        this.pageIndex.set(0);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load");
        this.loading.set(false);
      }
    });
  }
  onSearch(value) {
    this.searchQuery.set(value);
    this.load();
  }
  setStatusFilter(value) {
    this.statusFilter.set(value === "inactive" || value === "all" ? value : "active");
    this.load();
  }
  setPageSize(size) {
    const next = typeof size === "string" ? Number(size) : Number(size);
    if (!Number.isFinite(next) || next <= 0)
      return;
    this.pageSize.set(next);
    this.pageIndex.set(0);
  }
  prevPage() {
    const idx = this.pageIndex();
    if (idx <= 0)
      return;
    this.pageIndex.set(idx - 1);
  }
  nextPage() {
    const idx = this.pageIndex();
    const total = this.totalPages();
    if (idx >= total - 1)
      return;
    this.pageIndex.set(idx + 1);
  }
  latestBatchNumber(p) {
    const batches = p.batches ?? [];
    if (!batches.length)
      return "-";
    const latest = [...batches].sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0];
    return latest?.batchNumber ?? "-";
  }
  startEdit(p) {
    this.editingId.set(p.id);
    const latest = this.latestBatch(p);
    this.editingBatchId.set(latest?.id ?? null);
    this.editingBatchOriginalNumber.set(latest?.batchNumber ?? "");
    this.editForm.reset({
      sku: p.sku,
      barcode: p.barcode ?? "",
      batchNumber: latest?.batchNumber ?? "",
      name: p.name,
      brand: p.brand ?? "",
      category: p.category ?? "",
      variant: p.variant ?? "",
      unitOfMeasure: p.unitOfMeasure,
      buyingPrice: p.buyingPrice ?? null,
      sellingPrice: p.sellingPrice ?? null
    });
  }
  cancelEdit() {
    this.editingId.set(null);
    this.editingBatchId.set(null);
    this.editingBatchOriginalNumber.set("");
  }
  saveEdit() {
    const id = this.editingId();
    if (!id)
      return;
    if (this.editForm.invalid)
      return;
    this.loading.set(true);
    this.error.set(null);
    const raw = this.editForm.getRawValue();
    const input = {
      id,
      sku: raw.sku,
      barcode: raw.barcode,
      name: raw.name,
      brand: raw.brand,
      category: raw.category,
      variant: raw.variant,
      unitOfMeasure: raw.unitOfMeasure,
      buyingPrice: raw.buyingPrice,
      sellingPrice: raw.sellingPrice
    };
    const mutation = `mutation UpdateProduct($input: UpdateProductInput!) {
      updateProduct(input: $input) {
        id sku barcode name brand category variant unitOfMeasure buyingPrice sellingPrice active
      }
    }`;
    this.gql.request(mutation, { input }).subscribe({
      next: () => {
        const batchId = this.editingBatchId();
        const original = this.editingBatchOriginalNumber();
        const newBatchNumber = String(raw.batchNumber ?? "").trim();
        const shouldUpdateBatch = !!batchId && newBatchNumber.length > 0 && newBatchNumber !== original;
        if (!shouldUpdateBatch) {
          this.editingId.set(null);
          this.editingBatchId.set(null);
          this.editingBatchOriginalNumber.set("");
          this.load();
          return;
        }
        const batchMutation = `mutation UpdateBatchNumber($input: UpdateBatchNumberInput!) {
          updateBatchNumber(input: $input) { id }
        }`;
        this.gql.request(batchMutation, {
          input: {
            batchId,
            batchNumber: newBatchNumber
          }
        }).subscribe({
          next: () => {
            this.editingId.set(null);
            this.editingBatchId.set(null);
            this.editingBatchOriginalNumber.set("");
            this.load();
          },
          error: (e) => {
            this.error.set(e instanceof Error ? e.message : "Failed to update batch");
            this.loading.set(false);
          }
        });
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to update");
        this.loading.set(false);
      }
    });
  }
  delete(p) {
    this.pendingDelete.set(p);
    this.deleteDialogOpen.set(true);
  }
  cancelDelete() {
    this.deleteDialogOpen.set(false);
    this.pendingDelete.set(null);
  }
  confirmDelete() {
    const p = this.pendingDelete();
    if (!p)
      return;
    this.loading.set(true);
    this.error.set(null);
    const mutation = `mutation SetStatus($input: SetProductStatusInput!) {
      setProductStatus(input: $input) { id active }
    }`;
    this.gql.request(mutation, {
      input: {
        id: p.id,
        active: false
      }
    }).subscribe({
      next: () => {
        if (this.editingId() === p.id) {
          this.editingId.set(null);
        }
        this.deleteDialogOpen.set(false);
        this.pendingDelete.set(null);
        this.showToast("Product deactivated \u2014 hidden until reactivated", "success");
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to delete");
        this.showToast("Failed to delete product", "error");
        this.loading.set(false);
      }
    });
  }
  activate(p) {
    if (!this.perm.canEdit("PRODUCTS") || this.loading())
      return;
    this.loading.set(true);
    this.error.set(null);
    const mutation = `mutation SetStatus($input: SetProductStatusInput!) {
      setProductStatus(input: $input) { id active }
    }`;
    this.gql.request(mutation, {
      input: {
        id: p.id,
        active: true
      }
    }).subscribe({
      next: () => {
        this.showToast("Product activated", "success");
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to activate");
        this.showToast("Failed to activate product", "error");
        this.loading.set(false);
      }
    });
  }
  dismissToast() {
    this.toastMessage.set(null);
  }
  showToast(message, variant) {
    this.toastVariant.set(variant);
    this.toastMessage.set(message);
    window.setTimeout(() => {
      if (this.toastMessage() === message) {
        this.toastMessage.set(null);
      }
    }, 2500);
  }
  openCreate() {
    this.createDialogOpen.set(true);
    this.error.set(null);
  }
  cancelCreate() {
    this.createDialogOpen.set(false);
    this.error.set(null);
  }
  create(value) {
    this.loading.set(true);
    this.error.set(null);
    const productInput = {
      sku: value.sku,
      barcode: value.barcode,
      name: value.name,
      brand: value.brand,
      category: value.category,
      variant: value.variant,
      unitOfMeasure: value.unitOfMeasure,
      buyingPrice: value.buyingPrice,
      sellingPrice: value.sellingPrice,
      active: false,
      units: value.units
    };
    const mutation = `mutation Create($input: CreateProductInput!) { createProduct(input: $input) { id sku } }`;
    this.gql.request(mutation, { input: productInput }).subscribe({
      next: (res) => this.queueForReceiving(res.createProduct.id, value),
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to create");
        this.loading.set(false);
      }
    });
  }
  queueForReceiving(productId, value) {
    const mutation = `mutation QueueReceiving($input: SubmitRepurchaseInput!) {
      submitRepurchase(input: $input) { id }
    }`;
    this.gql.request(mutation, {
      input: {
        id: crypto.randomUUID(),
        activation: true,
        branch: this.branchCtx.writeBranch(),
        lines: [{
          productId,
          quantity: value.initialQuantity ?? 0,
          buyingPrice: value.buyingPrice ?? 0,
          sellingPrice: value.sellingPrice ?? 0,
          batchNumber: (value.batchNumber ?? "").trim() || null,
          expiryDate: (value.expiryDate ?? "").trim() || null,
          location: (value.location ?? "").trim() || null
        }]
      }
    }).subscribe({
      next: () => {
        this.createDialogOpen.set(false);
        this.showToast("Product saved \u2014 pending receiving", "success");
        this.pendingReceiving.refresh();
        this.load();
      },
      error: (e) => {
        this.createDialogOpen.set(false);
        this.showToast(e instanceof Error ? e.message : "Product saved but could not be queued for receiving", "error");
        this.load();
      }
    });
  }
  static \u0275fac = function ProductsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductsPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsPage, selectors: [["cis-products-page"]], decls: 90, vars: 70, consts: [["editSku", ""], ["editBarcode", ""], ["editBatch", ""], ["editName", ""], ["editBrand", ""], ["editCategory", ""], ["editBuying", ""], ["editSelling", ""], ["editunitOfMeasure", ""], ["editActions", ""], [1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-4", "grid", "grid-cols-1", "gap-4"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "flex", "items-center", "gap-2"], ["class", "rounded-xl bg-pink-500 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70", 3, "disabled", "click", 4, "ngIf"], [1, "mt-3", "grid", "gap-2", "sm:grid-cols-[1fr_auto_auto]"], [1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]", 3, "input", "value", "placeholder"], [1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "change", "value"], ["value", "active"], ["value", "inactive"], ["value", "all"], [1, "rounded-xl", "bg-pink-500", "px-3", "py-2", "text-xs", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "mt-3", "flex", "flex-wrap", "items-center", "justify-between", "gap-2"], [1, "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-400"], [1, "ml-2", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-xs", "text-slate-900", "dark:text-slate-100", 3, "change", "value"], [3, "value"], [1, "rounded-lg", "bg-slate-100", "dark:bg-slate-700", "px-2", "py-1", "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-200", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "click", "disabled"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], ["class", "cis-modal-overlay fixed inset-0 z-40", 4, "ngIf"], ["class", "fixed right-4 top-4 z-50", "role", "status", "aria-live", "polite", 4, "ngIf"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [4, "ngIf", "ngIfElse"], [1, "px-3", "py-2"], [1, "text-slate-800", "dark:text-slate-200"], [3, "formGroup"], ["formControlName", "sku", 1, "w-full", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["formControlName", "barcode", 1, "w-full", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["formControlName", "batchNumber", 1, "w-full", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]", 3, "placeholder", "readOnly"], ["formControlName", "name", 1, "w-full", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["formControlName", "brand", 1, "w-full", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["formControlName", "category", 1, "w-full", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "buyingPrice", 1, "w-full", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["type", "number", "formControlName", "sellingPrice", 1, "w-full", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["type", "string", "formControlName", "unitOfMeasure", 1, "w-full", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["class", "cis-row-action", 3, "disabled", "click", 4, "ngIf"], ["class", "cis-row-action cis-row-action-danger", 3, "disabled", "click", 4, "ngIf"], [1, "cis-row-action", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "cis-row-action", "cis-row-action-danger", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "flex", "gap-2"], [1, "rounded-lg", "bg-emerald-700", "px-2", "py-1", "text-xs", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "rounded-lg", "bg-slate-700", "dark:bg-slate-600", "px-2", "py-1", "text-xs", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "cis-modal-overlay", "fixed", "inset-0", "z-40"], [1, "absolute", "inset-0", "bg-slate-900/40", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-2xl", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700"], [1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], [1, "mt-4"], [3, "submitted", "cancel", "categories", "loading", "error", "open"], ["role", "status", "aria-live", "polite", 1, "fixed", "right-4", "top-4", "z-50"], [1, "flex", "items-start", "gap-3", "rounded-xl", "px-4", "py-3", "text-sm", "font-medium", "shadow-lg", "ring-1"], [1, "flex-1"], [1, "text-xs", "font-semibold", "opacity-80", "hover:opacity-100", 3, "click"], [1, "w-full", "max-w-md", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700"], [1, "mt-2", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-5", "flex", "justify-end", "gap-2"], [1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "rounded-xl", "bg-[#B81104]", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-[#7f0c03]", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"]], template: function ProductsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 10)(1, "h2", 11);
      \u0275\u0275text(2, "Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 12)(4, "section", 13)(5, "div", 10)(6, "h3", 14);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 15);
      \u0275\u0275template(10, ProductsPage_button_10_Template, 4, 7, "button", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 17)(12, "input", 18);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275listener("input", function ProductsPage_Template_input_input_12_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "select", 19);
      \u0275\u0275listener("change", function ProductsPage_Template_select_change_14_listener($event) {
        return ctx.setStatusFilter($event.target.value);
      });
      \u0275\u0275elementStart(15, "option", 20);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 21);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 22);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "button", 23);
      \u0275\u0275listener("click", function ProductsPage_Template_button_click_24_listener() {
        return ctx.load();
      });
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 24)(28, "div", 25);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 15)(32, "label", 25);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementStart(35, "select", 26);
      \u0275\u0275listener("change", function ProductsPage_Template_select_change_35_listener($event) {
        return ctx.setPageSize($event.target.value);
      });
      \u0275\u0275elementStart(36, "option", 27);
      \u0275\u0275text(37, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "option", 27);
      \u0275\u0275text(39, "20");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "option", 27);
      \u0275\u0275text(41, "50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "option", 27);
      \u0275\u0275text(43, "100");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "button", 28);
      \u0275\u0275listener("click", function ProductsPage_Template_button_click_44_listener() {
        return ctx.prevPage();
      });
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 25);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 28);
      \u0275\u0275listener("click", function ProductsPage_Template_button_click_50_listener() {
        return ctx.nextPage();
      });
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 29)(54, "table", 30)(55, "thead", 31)(56, "tr")(57, "th", 32);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 32);
      \u0275\u0275text(61, "Barcode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 32);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 32);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 32);
      \u0275\u0275text(69, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 32);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 32);
      \u0275\u0275text(74, "Buying");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 32);
      \u0275\u0275text(76, "Selling");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 32);
      \u0275\u0275text(78, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 32);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 32);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "tbody");
      \u0275\u0275template(86, ProductsPage_tr_86_Template, 46, 27, "tr", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(87, ProductsPage_div_87_Template, 13, 10, "div", 34)(88, ProductsPage_div_88_Template, 7, 16, "div", 35)(89, ProductsPage_div_89_Template, 19, 12, "div", 34);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 36, "common.list"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.perm.canCreate("PRODUCTS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(13, 38, "common.searchProductSkuBarcode")))("value", ctx.searchQuery());
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.statusFilter());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 40, "common.active"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 42, "common.inactive"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 44, "common.all"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 46, "common.search"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(30, 48, "common.total"), ": ", ctx.products().length);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 50, "common.show"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.pageSize());
      \u0275\u0275advance();
      \u0275\u0275property("value", 10);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 50);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 100);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.pageIndex() === 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 52, "common.prev"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(49, 54, "common.page"), " ", ctx.pageIndex() + 1, " / ", ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.pageIndex() >= ctx.totalPages() - 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 56, "common.next"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 58, "common.sku"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 60, "common.batch"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 62, "common.name"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 64, "common.category"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 66, "common.status"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 68, "common.actions"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedProducts());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.createDialogOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toastMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteDialogOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ProductFormComponent, RowActionsMenuComponent, MoneyPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductsPage, [{
    type: Component,
    args: [{ selector: "cis-products-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, ProductFormComponent, MoneyPipe, TranslatePipe, RowActionsMenuComponent], template: `<div class="flex items-center justify-between">
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Products</h2>
</div>

<div class="mt-4 grid grid-cols-1 gap-4">
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
    <div class="flex items-center justify-between">
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.list' | translate }}</h3>
      <div class="flex items-center gap-2">
        <button
          *ngIf="perm.canCreate('PRODUCTS')"
          class="rounded-xl bg-pink-500 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
          (click)="openCreate()"
          [disabled]="loading()"
        >
          {{ 'common.add' | translate }} {{ 'common.product' | translate }}
        </button>
      </div>
    </div>

    <div class="mt-3 grid gap-2 sm:grid-cols-[1fr_auto_auto]">
      <input
        class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
        [value]="searchQuery()"
        (input)="onSearch(($any($event.target)).value)"
        placeholder="{{ 'common.searchProductSkuBarcode' | translate }}"
      />
      <select
        class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
        [value]="statusFilter()"
        (change)="setStatusFilter(($any($event.target)).value)"
      >
        <option value="active">{{ 'common.active' | translate }}</option>
        <option value="inactive">{{ 'common.inactive' | translate }}</option>
        <option value="all">{{ 'common.all' | translate }}</option>
      </select>
      <button
        class="rounded-xl bg-pink-500 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
        (click)="load()"
        [disabled]="loading()"
      >
        {{ 'common.search' | translate }}
      </button>
    </div>

    <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
      <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.total' | translate }}: {{ products().length }}</div>
      <div class="flex items-center gap-2">
        <label class="text-xs font-semibold text-slate-600 dark:text-slate-400">
          {{ 'common.show' | translate }}
          <select
            class="ml-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-xs text-slate-900 dark:text-slate-100"
            [value]="pageSize()"
            (change)="setPageSize(($any($event.target)).value)"
          >
            <option [value]="10">10</option>
            <option [value]="20">20</option>
            <option [value]="50">50</option>
            <option [value]="100">100</option>
          </select>
        </label>

        <button
          class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
          (click)="prevPage()"
          [disabled]="pageIndex() === 0"
        >
          {{ 'common.prev' | translate }}
        </button>
        <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.page' | translate }} {{ pageIndex() + 1 }} / {{ totalPages() }}</div>
        <button
          class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
          (click)="nextPage()"
          [disabled]="pageIndex() >= totalPages() - 1"
        >
          {{ 'common.next' | translate }}
        </button>
      </div>
    </div>

    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
      <table class="w-full border-collapse text-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.sku' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Barcode</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.batch' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.name' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Brand</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.category' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Buying</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Selling</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Units</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.status' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of displayedProducts()" class="border-t border-slate-100 dark:border-slate-700">
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">
              <ng-container *ngIf="editingId() !== p.id; else editSku">
                {{ p.sku }}
              </ng-container>
              <ng-template #editSku>
                <div [formGroup]="editForm">
                  <input
                    class="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
                    formControlName="sku"
                  />
                </div>
              </ng-template>
            </td>

            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">
              <ng-container *ngIf="editingId() !== p.id; else editBarcode">
                {{ p.barcode || '-' }}
              </ng-container>
              <ng-template #editBarcode>
                <div [formGroup]="editForm">
                  <input
                    class="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
                    formControlName="barcode"
                  />
                </div>
              </ng-template>
            </td>

            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">
              <ng-container *ngIf="editingId() !== p.id; else editBatch">
                {{ latestBatchNumber(p) }}
              </ng-container>
              <ng-template #editBatch>
                <div [formGroup]="editForm">
                  <input
                    class="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
                    formControlName="batchNumber"
                    [placeholder]="latestBatchNumber(p) === '-' ? 'No batch' : ''"
                    [readOnly]="latestBatchNumber(p) === '-'"
                  />
                </div>
              </ng-template>
            </td>

            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">
              <ng-container *ngIf="editingId() !== p.id; else editName">
                {{ p.name }}
              </ng-container>
              <ng-template #editName>
                <div [formGroup]="editForm">
                  <input
                    class="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
                    formControlName="name"
                  />
                </div>
              </ng-template>
            </td>

            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">
              <ng-container *ngIf="editingId() !== p.id; else editBrand">
                {{ p.brand || '-' }}
              </ng-container>
              <ng-template #editBrand>
                <div [formGroup]="editForm">
                  <input
                    class="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
                    formControlName="brand"
                  />
                </div>
              </ng-template>
            </td>

            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">
              <ng-container *ngIf="editingId() !== p.id; else editCategory">
                {{ p.category || '-' }}
              </ng-container>
              <ng-template #editCategory>
                <div [formGroup]="editForm">
                  <select
                    class="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
                    formControlName="category"
                  >
                    <option value="">{{ 'common.selectCategory' | translate }}</option>
                    <option *ngFor="let c of categories()" [value]="c.name">{{ c.name }}</option>
                  </select>
                </div>
              </ng-template>
            </td>

            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">
              <ng-container *ngIf="editingId() !== p.id; else editBuying">
                {{ p.buyingPrice | money }}
              </ng-container>
              <ng-template #editBuying>
                <div [formGroup]="editForm">
                  <input
                    class="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
                    type="number"
                    formControlName="buyingPrice"
                  />
                </div>
              </ng-template>
            </td>

            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">
              <ng-container *ngIf="editingId() !== p.id; else editSelling">
                {{ p.sellingPrice | money }}
              </ng-container>
              <ng-template #editSelling>
                <div [formGroup]="editForm">
                  <input
                    class="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
                    type="number"
                    formControlName="sellingPrice"
                  />
                </div>
              </ng-template>
            </td>
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">
              <ng-container *ngIf="editingId() !== p.id; else editunitOfMeasure">
                {{ p.unitOfMeasure ?? '-' }}
              </ng-container>
              <ng-template #editunitOfMeasure>
                <div [formGroup]="editForm">
                  <input
                    class="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
                    type="string"
                    formControlName="unitOfMeasure"
                  />
                </div>
              </ng-template>
            </td>
            <td class="px-3 py-2">
              <span class="text-slate-800 dark:text-slate-200" [class.text-[#B81104]]="!p.active">
                {{ p.active ? ('common.active' | translate) : ('common.inactive' | translate) }}
              </span>
            </td>

            <td class="px-3 py-2">
              <ng-container *ngIf="editingId() !== p.id; else editActions">
                <cis-row-actions>
                  <button
                    *ngIf="perm.canEdit('PRODUCTS')"
                    class="cis-row-action"
                    (click)="startEdit(p)"
                    [disabled]="loading()"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    {{ 'common.edit' | translate }}
                  </button>
                  <button
                    *ngIf="perm.canEdit('PRODUCTS') && !p.active"
                    class="cis-row-action"
                    (click)="activate(p)"
                    [disabled]="loading()"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {{ 'common.activate' | translate }}
                  </button>
                  <button
                    *ngIf="perm.canDelete('PRODUCTS') && p.active"
                    class="cis-row-action cis-row-action-danger"
                    (click)="delete(p)"
                    [disabled]="loading()"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    {{ 'common.delete' | translate }}
                  </button>
                </cis-row-actions>
              </ng-container>

              <ng-template #editActions>
                <div class="flex gap-2">
                  <button
                    class="rounded-lg bg-emerald-700 px-2 py-1 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
                    (click)="saveEdit()"
                    [disabled]="loading() || editForm.invalid"
                  >
                    {{ 'common.save' | translate }}
                  </button>
                  <button
                    class="rounded-lg bg-slate-700 dark:bg-slate-600 px-2 py-1 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
                    (click)="cancelEdit()"
                    [disabled]="loading()"
                  >
                    {{ 'common.close' | translate }}
                  </button>
                </div>
              </ng-template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</div>

<div *ngIf="createDialogOpen()" class="cis-modal-overlay fixed inset-0 z-40">
  <div class="absolute inset-0 bg-slate-900/40" (click)="cancelCreate()"></div>
  <div class="absolute inset-0 flex items-center justify-center p-4">
    <div class="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700">
      <div class="flex items-center justify-between">
        <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.add' | translate }} {{ 'common.product' | translate }}</div>
        <button class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="cancelCreate()">\u2715</button>
      </div>

      <div class="mt-4">
        <cis-product-form
          [categories]="categories()"
          [loading]="loading()"
          [error]="error()"
          [open]="createDialogOpen()"
          (submitted)="create($event)"
          (cancel)="cancelCreate()"
        ></cis-product-form>
      </div>
    </div>
  </div>
</div>

<div
  *ngIf="toastMessage()"
  class="fixed right-4 top-4 z-50"
  role="status"
  aria-live="polite"
>
  <div
    class="flex items-start gap-3 rounded-xl px-4 py-3 text-sm font-medium shadow-lg ring-1"
    [class.bg-[#FFFACD]]="toastVariant() === 'success'"
    [class.text-emerald-900]="toastVariant() === 'success'"
    [class.ring-pink-500/25]="toastVariant() === 'success'"
    [class.bg-[#B81104]/10]="toastVariant() === 'error'"
    [class.text-red-900]="toastVariant() === 'error'"
    [class.ring-[#B81104]/25]="toastVariant() === 'error'"
  >
    <div class="flex-1">{{ toastMessage() }}</div>
    <button class="text-xs font-semibold opacity-80 hover:opacity-100" (click)="dismissToast()">{{ 'common.close' | translate }}</button>
  </div>
</div>

<div *ngIf="deleteDialogOpen()" class="cis-modal-overlay fixed inset-0 z-40">
  <div class="absolute inset-0 bg-slate-900/40" (click)="cancelDelete()"></div>
  <div class="absolute inset-0 flex items-center justify-center p-4">
    <div class="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700">
      <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.delete' | translate }}</div>
      <div class="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Are you sure you want to delete
        <span class="font-semibold text-slate-900 dark:text-slate-100">{{ pendingDelete()?.name }}</span>?
        The product will be deactivated and hidden everywhere until it is reactivated.
      </div>

      <div class="mt-5 flex justify-end gap-2">
        <button
          class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70"
          (click)="cancelDelete()"
          [disabled]="loading()"
        >
          {{ 'common.close' | translate }}
        </button>
        <button
          class="rounded-xl bg-[#B81104] px-4 py-2 text-sm font-semibold text-white hover:bg-[#7f0c03] disabled:cursor-not-allowed disabled:opacity-70"
          (click)="confirmDelete()"
          [disabled]="loading()"
        >
          {{ 'common.delete' | translate }}
        </button>
      </div>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: GraphqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsPage, { className: "ProductsPage", filePath: "app/features/products/products.page.ts", lineNumber: 77 });
})();

// src/app/features/categories/categories.page.ts
function CategoriesPage_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function CategoriesPage_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "common.add"), " ", \u0275\u0275pipeBind1(3, 4, "common.category"), " ");
  }
}
function CategoriesPage_div_4_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function CategoriesPage_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275listener("click", function CategoriesPage_div_4_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 20)(3, "div", 21);
    \u0275\u0275listener("click", function CategoriesPage_div_4_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 10);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275listener("click", function CategoriesPage_div_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(10, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "form", 23);
    \u0275\u0275listener("ngSubmit", function CategoriesPage_div_4_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create());
    });
    \u0275\u0275elementStart(12, "label", 24);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275element(15, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label", 24);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275element(19, "textarea", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, CategoriesPage_div_4_div_20_Template, 2, 1, "div", 27);
    \u0275\u0275elementStart(21, "div", 28)(22, "button", 29);
    \u0275\u0275listener("click", function CategoriesPage_div_4_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 30);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(7, 9, "common.add"), " ", \u0275\u0275pipeBind1(8, 11, "common.category"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.createForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 13, "common.name"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 15, "common.description"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 17, "common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.createForm.invalid || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? \u0275\u0275pipeBind1(27, 19, "common.saving") : \u0275\u0275pipeBind1(28, 21, "common.create"), " ");
  }
}
function CategoriesPage_tr_29_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.name);
  }
}
function CategoriesPage_tr_29_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "input", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
  }
}
function CategoriesPage_tr_29_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.description || "-");
  }
}
function CategoriesPage_tr_29_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "input", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
  }
}
function CategoriesPage_tr_29_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("text-[#B81104]", !c_r4.active)("dark:text-red-400", !c_r4.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r4.active ? \u0275\u0275pipeBind1(3, 5, "common.active") : \u0275\u0275pipeBind1(4, 7, "common.inactive"), " ");
  }
}
function CategoriesPage_tr_29_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "select", 40)(2, "option", 41);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 41);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "common.active"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "common.inactive"));
  }
}
function CategoriesPage_tr_29_ng_container_14_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function CategoriesPage_tr_29_ng_container_14_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const c_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startEdit(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.edit"), " ");
  }
}
function CategoriesPage_tr_29_ng_container_14_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function CategoriesPage_tr_29_ng_container_14_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.delete(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.delete"), " ");
  }
}
function CategoriesPage_tr_29_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "cis-row-actions");
    \u0275\u0275template(2, CategoriesPage_tr_29_ng_container_14_button_2_Template, 5, 4, "button", 42)(3, CategoriesPage_tr_29_ng_container_14_button_3_Template, 5, 4, "button", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("CATEGORIES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("CATEGORIES"));
  }
}
function CategoriesPage_tr_29_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "button", 50);
    \u0275\u0275listener("click", function CategoriesPage_tr_29_ng_template_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 51);
    \u0275\u0275listener("click", function CategoriesPage_tr_29_ng_template_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading() || ctx_r1.editForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "common.save"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "common.close"), " ");
  }
}
function CategoriesPage_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 32)(1, "td", 33);
    \u0275\u0275template(2, CategoriesPage_tr_29_ng_container_2_Template, 3, 1, "ng-container", 34)(3, CategoriesPage_tr_29_ng_template_3_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 33);
    \u0275\u0275template(6, CategoriesPage_tr_29_ng_container_6_Template, 3, 1, "ng-container", 34)(7, CategoriesPage_tr_29_ng_template_7_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 33);
    \u0275\u0275template(10, CategoriesPage_tr_29_ng_container_10_Template, 5, 9, "ng-container", 34)(11, CategoriesPage_tr_29_ng_template_11_Template, 8, 9, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 33);
    \u0275\u0275template(14, CategoriesPage_tr_29_ng_container_14_Template, 4, 2, "ng-container", 34)(15, CategoriesPage_tr_29_ng_template_15_Template, 7, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const editName_r8 = \u0275\u0275reference(4);
    const editDesc_r9 = \u0275\u0275reference(8);
    const editActive_r10 = \u0275\u0275reference(12);
    const editActions_r11 = \u0275\u0275reference(16);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== c_r4.id)("ngIfElse", editName_r8);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== c_r4.id)("ngIfElse", editDesc_r9);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== c_r4.id)("ngIfElse", editActive_r10);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.editingId() !== c_r4.id)("ngIfElse", editActions_r11);
  }
}
var CategoriesPage = class _CategoriesPage {
  gql;
  perm = inject(PermissionService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  displayedCategories = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.categories().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedCategories" }] : []);
  createOpen = signal(false, ...ngDevMode ? [{ debugName: "createOpen" }] : []);
  editingId = signal(null, ...ngDevMode ? [{ debugName: "editingId" }] : []);
  fb = inject(FormBuilder);
  createForm = this.fb.group({
    name: ["", [Validators.required]],
    description: [""]
  });
  editForm = this.fb.group({
    name: ["", [Validators.required]],
    description: [""],
    active: [true, [Validators.required]]
  });
  constructor(gql) {
    this.gql = gql;
    this.perm.load();
    this.load();
  }
  openCreate() {
    this.error.set(null);
    this.createForm.reset({ name: "", description: "" });
    this.createOpen.set(true);
  }
  closeCreate() {
    this.createOpen.set(false);
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const query = `query Categories { categories { id name description active } }`;
    this.gql.request(query).subscribe({
      next: (res) => {
        this.categories.set(res.categories);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load");
        this.loading.set(false);
      }
    });
  }
  create() {
    if (this.createForm.invalid)
      return;
    this.loading.set(true);
    this.error.set(null);
    const input = this.createForm.getRawValue();
    const mutation = `mutation CreateCategory($input: CreateCategoryInput!) { createCategory(input: $input) { id name description active } }`;
    this.gql.request(mutation, { input }).subscribe({
      next: () => {
        this.createForm.reset({ name: "", description: "" });
        this.createOpen.set(false);
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to create");
        this.loading.set(false);
      }
    });
  }
  startEdit(c) {
    this.editingId.set(c.id);
    this.editForm.reset({
      name: c.name,
      description: c.description ?? "",
      active: c.active
    });
  }
  cancelEdit() {
    this.editingId.set(null);
  }
  saveEdit() {
    const id = this.editingId();
    if (!id)
      return;
    if (this.editForm.invalid)
      return;
    this.loading.set(true);
    this.error.set(null);
    const raw = this.editForm.getRawValue();
    const input = {
      id,
      name: raw.name,
      description: raw.description,
      active: raw.active
    };
    const mutation = `mutation UpdateCategory($input: UpdateCategoryInput!) { updateCategory(input: $input) { id name description active } }`;
    this.gql.request(mutation, { input }).subscribe({
      next: () => {
        this.editingId.set(null);
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to update");
        this.loading.set(false);
      }
    });
  }
  delete(c) {
    const ok = confirm(`Delete category "${c.name}"?`);
    if (!ok)
      return;
    this.loading.set(true);
    this.error.set(null);
    const mutation = `mutation DeleteCategory($input: DeleteCategoryInput!) { deleteCategory(input: $input) }`;
    this.gql.request(mutation, { input: { id: c.id } }).subscribe({
      next: () => {
        if (this.editingId() === c.id) {
          this.editingId.set(null);
        }
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to delete");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function CategoriesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoriesPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesPage, selectors: [["cis-categories-page"]], decls: 30, vars: 21, consts: [["editName", ""], ["editDesc", ""], ["editActive", ""], ["editActions", ""], [1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], ["class", "rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white", "type", "button", 3, "click", 4, "ngIf"], ["class", "cis-modal-overlay fixed inset-0 z-50", 4, "ngIf"], [1, "mt-4", "grid", "grid-cols-1", "gap-4", "xl:grid-cols-1"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", 3, "click"], [1, "cis-modal-overlay", "fixed", "inset-0", "z-50"], [1, "absolute", "inset-0", "bg-slate-900/40", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-md", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], [1, "mt-4", "grid", "gap-3", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], ["formControlName", "name", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["formControlName", "description", 1, "min-h-[90px]", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["class", "text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-2", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "disabled"], [1, "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2"], [4, "ngIf", "ngIfElse"], [1, "text-slate-900", "dark:text-slate-300"], [3, "formGroup"], ["formControlName", "name", 1, "w-full", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["formControlName", "description", 1, "w-full", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], [1, "text-slate-800", "dark:text-slate-300"], ["formControlName", "active", 1, "w-full", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], [3, "ngValue"], ["class", "cis-row-action", 3, "disabled", "click", 4, "ngIf"], ["class", "cis-row-action cis-row-action-danger", 3, "disabled", "click", 4, "ngIf"], [1, "cis-row-action", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "cis-row-action", "cis-row-action-danger", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "flex", "gap-2"], [1, "rounded-lg", "bg-emerald-700", "px-2", "py-1", "text-xs", "font-semibold", "text-white", 3, "click", "disabled"], [1, "rounded-lg", "bg-slate-700", "px-2", "py-1", "text-xs", "font-semibold", "text-white", 3, "click", "disabled"]], template: function CategoriesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "h2", 5);
      \u0275\u0275text(2, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, CategoriesPage_button_3_Template, 4, 6, "button", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, CategoriesPage_div_4_Template, 29, 23, "div", 7);
      \u0275\u0275elementStart(5, "div", 8)(6, "section", 9)(7, "div", 4)(8, "h3", 10);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "cis-pager", 11);
      \u0275\u0275twoWayListener("pageSizeChange", function CategoriesPage_Template_cis_pager_pageSizeChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      })("pageIndexChange", function CategoriesPage_Template_cis_pager_pageIndexChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 12)(13, "table", 13)(14, "thead", 14)(15, "tr")(16, "th", 15);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "th", 15);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th", 15);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th", 15);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "tbody");
      \u0275\u0275template(29, CategoriesPage_tr_29_Template, 17, 8, "tr", 16);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.perm.canCreate("CATEGORIES"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.createOpen());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "common.list"));
      \u0275\u0275advance(2);
      \u0275\u0275property("total", ctx.categories().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 13, "common.name"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 15, "common.description"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 17, "common.status"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 19, "common.actions"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedCategories());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RowActionsMenuComponent, PagerComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoriesPage, [{
    type: Component,
    args: [{ selector: "cis-categories-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RowActionsMenuComponent, PagerComponent], template: `<div class="flex items-center justify-between">
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Categories</h2>
  <button *ngIf="perm.canCreate('CATEGORIES')" class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white" type="button" (click)="openCreate()">
    {{ 'common.add' | translate }} {{ 'common.category' | translate }}
  </button>
</div>

<div *ngIf="createOpen()" class="cis-modal-overlay fixed inset-0 z-50">
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeCreate()"></div>
  <div class="absolute inset-0 flex items-center justify-center p-4">
    <div class="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">
      <div class="flex items-center justify-between">
        <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.add' | translate }} {{ 'common.category' | translate }}</div>
        <button class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200" type="button" (click)="closeCreate()">\u2715</button>
      </div>

      <form class="mt-4 grid gap-3" [formGroup]="createForm" (ngSubmit)="create()">
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
          {{ 'common.name' | translate }}
          <input
            class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
            formControlName="name"
          />
        </label>

        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
          {{ 'common.description' | translate }}
          <textarea
            class="min-h-[90px] rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
            formControlName="description"
          ></textarea>
        </label>

        <div class="text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>

        <div class="mt-2 flex items-center justify-end gap-2">
          <button
            type="button"
            class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"
            (click)="closeCreate()"
          >
            {{ 'common.close' | translate }}
          </button>
          <button
            class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
            [disabled]="createForm.invalid || loading()"
          >
            {{ loading() ? ('common.saving' | translate) : ('common.create' | translate) }}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<div class="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-1">
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
    <div class="flex items-center justify-between">
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.list' | translate }}</h3>
    </div>

    <cis-pager class="mt-3 block" [total]="categories().length" [(pageSize)]="pageSize" [(pageIndex)]="pageIndex" />

    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
      <table class="w-full border-collapse text-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.name' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.description' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.status' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let c of displayedCategories()" class="border-t border-slate-100 dark:border-slate-700">
            <td class="px-3 py-2">
              <ng-container *ngIf="editingId() !== c.id; else editName">
                <span class="text-slate-900 dark:text-slate-300">{{ c.name }}</span>
              </ng-container>
              <ng-template #editName>
                <div [formGroup]="editForm">
                  <input
                    class="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
                    formControlName="name"
                  />
                </div>
              </ng-template>
            </td>

            <td class="px-3 py-2">
              <ng-container *ngIf="editingId() !== c.id; else editDesc">
                <span class="text-slate-900 dark:text-slate-300">{{ c.description || '-' }}</span>
              </ng-container>
              <ng-template #editDesc>
                <div [formGroup]="editForm">
                  <input
                    class="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
                    formControlName="description"
                  />
                </div>
              </ng-template>
            </td>

            <td class="px-3 py-2">
              <ng-container *ngIf="editingId() !== c.id; else editActive">
                <span class="text-slate-800 dark:text-slate-300" [class.text-[#B81104]]="!c.active" [class.dark:text-red-400]="!c.active">
                  {{ c.active ? ('common.active' | translate) : ('common.inactive' | translate) }}
                </span>
              </ng-container>
              <ng-template #editActive>
                <div [formGroup]="editForm">
                  <select
                    class="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
                    formControlName="active"
                  >
                    <option [ngValue]="true">{{ 'common.active' | translate }}</option>
                    <option [ngValue]="false">{{ 'common.inactive' | translate }}</option>
                  </select>
                </div>
              </ng-template>
            </td>

            <td class="px-3 py-2">
              <ng-container *ngIf="editingId() !== c.id; else editActions">
                <cis-row-actions>
                  <button
                    *ngIf="perm.canEdit('CATEGORIES')"
                    class="cis-row-action"
                    (click)="startEdit(c)"
                    [disabled]="loading()"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    {{ 'common.edit' | translate }}
                  </button>
                  <button
                    *ngIf="perm.canDelete('CATEGORIES')"
                    class="cis-row-action cis-row-action-danger"
                    (click)="delete(c)"
                    [disabled]="loading()"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    {{ 'common.delete' | translate }}
                  </button>
                </cis-row-actions>
              </ng-container>

              <ng-template #editActions>
                <div class="flex gap-2">
                  <button
                    class="rounded-lg bg-emerald-700 px-2 py-1 text-xs font-semibold text-white"
                    (click)="saveEdit()"
                    [disabled]="loading() || editForm.invalid"
                  >
                    {{ 'common.save' | translate }}
                  </button>
                  <button
                    class="rounded-lg bg-slate-700 px-2 py-1 text-xs font-semibold text-white"
                    (click)="cancelEdit()"
                    [disabled]="loading()"
                  >
                    {{ 'common.close' | translate }}
                  </button>
                </div>
              </ng-template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</div>
` }]
  }], () => [{ type: GraphqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesPage, { className: "CategoriesPage", filePath: "app/features/categories/categories.page.ts", lineNumber: 40 });
})();

// src/app/features/stock-movements/stock-movements.page.ts
function StockMovementsPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function StockMovementsPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "label", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "select", 19);
    \u0275\u0275listener("change", function StockMovementsPage_div_13_Template_select_change_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setPageSize($event.target.value));
    });
    \u0275\u0275elementStart(9, "option", 20);
    \u0275\u0275text(10, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 20);
    \u0275\u0275text(12, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 20);
    \u0275\u0275text(14, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 20);
    \u0275\u0275text(16, "50");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 21);
    \u0275\u0275listener("click", function StockMovementsPage_div_13_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.prevPage());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 17);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 21);
    \u0275\u0275listener("click", function StockMovementsPage_div_13_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 15, "common.total"), ": ", ctx_r0.items().length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 17, "common.show"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.pageSize());
    \u0275\u0275advance();
    \u0275\u0275property("value", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.pageIndex() === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, "common.previous"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(22, 21, "common.page"), " ", ctx_r0.pageIndex() + 1, " / ", ctx_r0.totalPages());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.pageIndex() >= ctx_r0.totalPages() - 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 23, "common.next"), " ");
  }
}
function StockMovementsPage_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 22)(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 25);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 23);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.batchNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.createdBy || "-");
  }
}
var StockMovementsPage = class _StockMovementsPage {
  gql;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  items = signal([], ...ngDevMode ? [{ debugName: "items" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  displayedItems = computed(() => {
    const all = this.items();
    const size = this.pageSize();
    const idx = this.pageIndex();
    const start = idx * size;
    return all.slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedItems" }] : []);
  totalPages = computed(() => Math.ceil(this.items().length / this.pageSize()), ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  fb = inject(FormBuilder);
  filterForm = this.fb.group({
    type: [""]
  });
  constructor(gql) {
    this.gql = gql;
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const { type } = this.filterForm.getRawValue();
    const q = `query Movements($filter: StockMovementFilter) {
      stockMovements(filter: $filter) {
        id type quantity createdAt createdBy note
        productId sku productName
        batchId batchNumber expiryDate
      }
    }`;
    this.gql.request(q, {
      filter: {
        type: type || null
      }
    }).subscribe({
      next: (res) => {
        this.items.set(res.stockMovements);
        this.pageIndex.set(0);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load movements");
        this.loading.set(false);
      }
    });
  }
  prevPage() {
    this.pageIndex.update((v) => Math.max(0, v - 1));
  }
  nextPage() {
    this.pageIndex.update((v) => Math.min(this.totalPages() - 1, v + 1));
  }
  setPageSize(size) {
    const next = typeof size === "string" ? parseInt(size, 10) : size;
    this.pageSize.set(next);
    this.pageIndex.set(0);
  }
  static \u0275fac = function StockMovementsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StockMovementsPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockMovementsPage, selectors: [["cis-stock-movements-page"]], decls: 41, vars: 31, consts: [[1, "flex", "items-center"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-4", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "grid", "gap-3", "sm:grid-cols-[240px_auto]", "sm:items-end", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], ["formControlName", "type", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], ["class", "mt-3 flex flex-wrap items-center justify-between gap-2", 4, "ngIf"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "mt-3", "flex", "flex-wrap", "items-center", "justify-between", "gap-2"], [1, "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-400"], [1, "flex", "items-center", "gap-2"], [1, "ml-2", "rounded-lg", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-2", "py-1", "text-xs", "text-slate-900", "dark:text-slate-100", 3, "change", "value"], [3, "value"], [1, "rounded-lg", "bg-slate-100", "dark:bg-slate-700", "px-2", "py-1", "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-200", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "click", "disabled"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"]], template: function StockMovementsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Stock Movements");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "form", 3);
      \u0275\u0275listener("ngSubmit", function StockMovementsPage_Template_form_ngSubmit_4_listener() {
        return ctx.load();
      });
      \u0275\u0275elementStart(5, "label", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275element(8, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, StockMovementsPage_div_12_Template, 2, 1, "div", 7)(13, StockMovementsPage_div_13_Template, 26, 25, "div", 8);
      \u0275\u0275elementStart(14, "div", 9)(15, "table", 10)(16, "thead", 11)(17, "tr")(18, "th", 12);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th", 12);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 12);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th", 12);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 12);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 13);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 12);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "tbody");
      \u0275\u0275template(40, StockMovementsPage_tr_40_Template, 15, 7, "tr", 14);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 13, "common.type"), " (IN / OUT / LOSS / ADJUSTMENT / RETURN) ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 15, "common.apply"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.items().length > 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, "common.date"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 19, "common.type"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 21, "common.sku"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 23, "common.product"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 25, "common.batch"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 27, "common.qty"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 29, "common.by"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedItems());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockMovementsPage, [{
    type: Component,
    args: [{ selector: "cis-stock-movements-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslatePipe], template: `<div class="flex items-center">
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Stock Movements</h2>
</div>

<div class="mt-4 rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
  <form class="grid gap-3 sm:grid-cols-[240px_auto] sm:items-end" [formGroup]="filterForm" (ngSubmit)="load()">
    <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
      {{ 'common.type' | translate }} (IN / OUT / LOSS / ADJUSTMENT / RETURN)
      <input
        class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
        formControlName="type"
      />
    </label>

    <button class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white" type="submit">
      {{ 'common.apply' | translate }}
    </button>
  </form>

  <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>

  <!-- Pagination -->
  <div class="mt-3 flex flex-wrap items-center justify-between gap-2" *ngIf="items().length > 0">
    <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.total' | translate }}: {{ items().length }}</div>
    <div class="flex items-center gap-2">
      <label class="text-xs font-semibold text-slate-600 dark:text-slate-400">
        {{ 'common.show' | translate }}
        <select
          class="ml-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-2 py-1 text-xs text-slate-900 dark:text-slate-100"
          [value]="pageSize()"
          (change)="setPageSize(($any($event.target)).value)"
        >
          <option [value]="5">5</option>
          <option [value]="10">10</option>
          <option [value]="20">20</option>
          <option [value]="50">50</option>
        </select>
      </label>

      <button
        class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        (click)="prevPage()"
        [disabled]="pageIndex() === 0"
      >
        {{ 'common.previous' | translate }}
      </button>
      <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">{{ 'common.page' | translate }} {{ pageIndex() + 1 }} / {{ totalPages() }}</div>
      <button
        class="rounded-lg bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        (click)="nextPage()"
        [disabled]="pageIndex() >= totalPages() - 1"
      >
        {{ 'common.next' | translate }}
      </button>
    </div>
  </div>

  <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
    <table class="w-full border-collapse text-sm">
      <thead class="bg-slate-50 dark:bg-slate-700">
        <tr>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.date' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.type' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.sku' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.batch' | translate }}</th>
          <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.qty' | translate }}</th>
          <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.by' | translate }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let m of displayedItems()" class="border-t border-slate-100 dark:border-slate-700">
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ m.createdAt }}</td>
          <td class="px-3 py-2 font-semibold text-slate-900 dark:text-slate-300">{{ m.type }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ m.sku }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ m.productName }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ m.batchNumber }}</td>
          <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ m.quantity }}</td>
          <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ m.createdBy || '-' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
` }]
  }], () => [{ type: GraphqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockMovementsPage, { className: "StockMovementsPage", filePath: "app/features/stock-movements/stock-movements.page.ts", lineNumber: 33 });
})();

// src/app/features/sales/sales.page.ts
var _c05 = () => ["all", "today", "week", "month"];
function SalesPage_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function SalesPage_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.create"), " Sale ");
  }
}
function SalesPage_option_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", +p_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.name, " ");
  }
}
function SalesPage_option_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    \u0275\u0275property("value", b_r4.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", b_r4.name, " (", b_r4.code, ")");
  }
}
function SalesPage_div_119_tr_25_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r6.product == null ? null : l_r6.product.sku);
  }
}
function SalesPage_div_119_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 94)(1, "td", 91)(2, "div", 95);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SalesPage_div_119_tr_25_div_4_Template, 2, 1, "div", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 97);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 98);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 99);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 98);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 100)(16, "button", 101);
    \u0275\u0275listener("click", function SalesPage_div_119_tr_25_Template_button_click_16_listener() {
      const idx_r7 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeLine(idx_r7));
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((l_r6.product == null ? null : l_r6.product.name) || "#" + l_r6.productId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", l_r6.product == null ? null : l_r6.product.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r6.location || "MAIN");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r6.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, l_r6.unitPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 9, ctx_r1.lineTotal(l_r6.quantity, l_r6.unitPrice)));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 11, "common.remove"));
  }
}
function SalesPage_div_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "h4", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 86)(5, "table", 87)(6, "thead", 88)(7, "tr")(8, "th", 89);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 89);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 90);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 90);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 90);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "th", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, SalesPage_div_119_tr_25_Template, 19, 13, "tr", 92);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 93);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementStart(29, "span", 45);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "money");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 9, "common.lines"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "common.product"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, "common.location"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 15, "common.qty"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 17, "common.price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 19, "common.total"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.displayLines());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 21, "common.grandTotal"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 23, ctx_r1.grandTotal()));
  }
}
function SalesPage_div_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function SalesPage_button_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function SalesPage_button_134_Template_button_click_0_listener() {
      const t_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTab(t_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.tabClass(t_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "common." + (t_r9 === "week" ? "thisWeek" : t_r9 === "month" ? "thisMonth" : t_r9)));
  }
}
function SalesPage_span_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 103);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pendingCarts().length);
  }
}
function SalesPage_button_147_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 104);
    \u0275\u0275listener("click", function SalesPage_button_147_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.clear"));
  }
}
function SalesPage_div_149_ng_container_22_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function SalesPage_div_149_ng_container_22_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const o_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(o_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 110);
    \u0275\u0275element(2, "path", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "common.edit"), " ");
  }
}
function SalesPage_div_149_ng_container_22_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 117);
    \u0275\u0275listener("click", function SalesPage_div_149_ng_container_22_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const o_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(o_r12.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 110);
    \u0275\u0275element(2, "path", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "common.delete"), " ");
  }
}
function SalesPage_div_149_ng_container_22_tr_22_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 129)(1, "td", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 97);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 97);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 98);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 99);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r15 = ctx.$implicit;
    const o_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r12.customer || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r15.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r15.location || "MAIN");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r15.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 5, l_r15.unitPrice));
  }
}
function SalesPage_div_149_ng_container_22_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 119)(1, "td", 120)(2, "div", 121)(3, "span", 122);
    \u0275\u0275text(4, "Sale details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 123)(6, "table", 124)(7, "thead", 125)(8, "tr")(9, "th", 126);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 126);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 126);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 127);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 127);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, SalesPage_div_149_ng_container_22_tr_22_tr_25_Template, 12, 7, "tr", 128);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const o_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, "common.customer"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 8, "common.product"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "common.location"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 12, "common.quantity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 14, "common.price"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", o_r12.lines);
  }
}
function SalesPage_div_149_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 94)(2, "td", 108);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 97);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 97);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 98);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 98);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 100)(14, "cis-row-actions")(15, "button", 109);
    \u0275\u0275listener("click", function SalesPage_div_149_ng_container_22_Template_button_click_15_listener() {
      const o_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleDetails(o_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 110);
    \u0275\u0275element(17, "path", 111)(18, "circle", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, SalesPage_div_149_ng_container_22_button_20_Template, 5, 3, "button", 113)(21, SalesPage_div_149_ng_container_22_button_21_Template, 5, 3, "button", 114);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, SalesPage_div_149_ng_container_22_tr_22_Template, 26, 16, "tr", 115);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const o_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r12.soldAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r12.customer || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r12.referenceNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r12.lines.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, ctx_r1.saleTotalValue(o_r12)));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailsOrderId() === o_r12.id ? "Hide details" : "Details", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("SALES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("SALES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailsOrderId() === o_r12.id);
  }
}
function SalesPage_div_149_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 94)(1, "td", 130);
    \u0275\u0275text(2, "No sales orders yet");
    \u0275\u0275elementEnd()();
  }
}
function SalesPage_div_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "table", 87)(2, "thead", 88)(3, "tr")(4, "th", 89);
    \u0275\u0275text(5, "Sold At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 89);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 89);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 90);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 90);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 90);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, SalesPage_div_149_ng_container_22_Template, 23, 11, "ng-container", 106)(23, SalesPage_div_149_tr_23_Template, 3, 0, "tr", 107);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "common.customer"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "common.reference"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "common.lines"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 13, "common.total"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 15, "common.actions"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.displayedOrders());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredOrders().length);
  }
}
function SalesPage_div_150_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 94)(1, "td", 108);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 97);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 97);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 97);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 98);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 98);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 100)(16, "span", 132);
    \u0275\u0275text(17, "PENDING");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, c_r16.createdAt, "yyyy-MM-dd HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r16.customer || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r16.referenceNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r16.createdBy || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r16.lines.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 9, c_r16.total));
  }
}
function SalesPage_div_150_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 94)(1, "td", 133);
    \u0275\u0275text(2, "No pending sales");
    \u0275\u0275elementEnd()();
  }
}
function SalesPage_div_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "table", 87)(2, "thead", 88)(3, "tr")(4, "th", 89);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 89);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 89);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 89);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 90);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 90);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 90);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, SalesPage_div_150_tr_26_Template, 18, 11, "tr", 92)(27, SalesPage_div_150_tr_27_Template, 3, 0, "tr", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 131);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, "common.created"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, "common.customer"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "common.reference"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 16, "common.seller"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 18, "common.lines"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 20, "common.total"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 22, "common.status"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.displayedCarts());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pendingCarts().length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 24, "sales.pendingHelp"), " ");
  }
}
function SalesPage_div_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 135);
    \u0275\u0275element(2, "path", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.deleteError(), " ");
  }
}
var SalesPage = class _SalesPage {
  gql;
  perm = inject(PermissionService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  orders = signal([], ...ngDevMode ? [{ debugName: "orders" }] : []);
  pendingCarts = signal([], ...ngDevMode ? [{ debugName: "pendingCarts" }] : []);
  activeTab = signal("all", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  dateFilter = signal("", ...ngDevMode ? [{ debugName: "dateFilter" }] : []);
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  filteredOrders = computed(() => {
    let list = this.orders();
    switch (this.activeTab()) {
      case "today":
        list = list.filter((o) => this.isToday(o.soldAt));
        break;
      case "week":
        list = list.filter((o) => this.isThisWeek(o.soldAt));
        break;
      case "month":
        list = list.filter((o) => this.isThisMonth(o.soldAt));
        break;
    }
    return list.filter((o) => this.matchesDate(o.soldAt) && this.matchesQuery(o));
  }, ...ngDevMode ? [{ debugName: "filteredOrders" }] : []);
  filteredCarts = computed(() => this.pendingCarts().filter((c) => this.matchesDate(c.createdAt) && this.matchesCartQuery(c)), ...ngDevMode ? [{ debugName: "filteredCarts" }] : []);
  displayedOrders = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.filteredOrders().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedOrders" }] : []);
  displayedCarts = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.filteredCarts().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedCarts" }] : []);
  totalSalesValue = computed(() => this.orders().reduce((sum, o) => sum + this.saleTotalValue(o), 0), ...ngDevMode ? [{ debugName: "totalSalesValue" }] : []);
  todayCollectionValue = computed(() => this.orders().filter((o) => this.isToday(o.soldAt)).reduce((sum, o) => sum + this.saleTotalValue(o), 0), ...ngDevMode ? [{ debugName: "todayCollectionValue" }] : []);
  outstandingValue = computed(() => this.pendingCarts().reduce((sum, c) => sum + Number(c.total ?? 0), 0), ...ngDevMode ? [{ debugName: "outstandingValue" }] : []);
  createOpen = signal(false, ...ngDevMode ? [{ debugName: "createOpen" }] : []);
  editingOrderId = signal(null, ...ngDevMode ? [{ debugName: "editingOrderId" }] : []);
  detailsOrderId = signal(null, ...ngDevMode ? [{ debugName: "detailsOrderId" }] : []);
  confirmDeleteOpen = signal(false, ...ngDevMode ? [{ debugName: "confirmDeleteOpen" }] : []);
  pendingDeleteOrderId = signal(null, ...ngDevMode ? [{ debugName: "pendingDeleteOrderId" }] : []);
  adminCodeOpen = signal(false, ...ngDevMode ? [{ debugName: "adminCodeOpen" }] : []);
  adminCode = signal("", ...ngDevMode ? [{ debugName: "adminCode" }] : []);
  deleteError = signal(null, ...ngDevMode ? [{ debugName: "deleteError" }] : []);
  products = signal([], ...ngDevMode ? [{ debugName: "products" }] : []);
  productQuery = signal("", ...ngDevMode ? [{ debugName: "productQuery" }] : []);
  filteredProducts = computed(() => {
    const q = this.productQuery().trim().toLowerCase();
    const all = this.products().filter((p) => p.active);
    if (!q)
      return all;
    return all.filter((p) => {
      const sku = (p.sku || "").toLowerCase();
      const name = (p.name || "").toLowerCase();
      return sku.includes(q) || name.includes(q);
    });
  }, ...ngDevMode ? [{ debugName: "filteredProducts" }] : []);
  lines = signal([], ...ngDevMode ? [{ debugName: "lines" }] : []);
  displayLines = computed(() => {
    const byId = new Map(this.products().map((p) => [+p.id, p]));
    return this.lines().map((l) => __spreadProps(__spreadValues({}, l), {
      product: byId.get(l.productId) || null
    }));
  }, ...ngDevMode ? [{ debugName: "displayLines" }] : []);
  fb = inject(FormBuilder);
  headerForm = this.fb.group({
    customer: [""],
    referenceNumber: [""]
  });
  lineForm = this.fb.group({
    productId: [null, [Validators.required, Validators.min(1)]],
    quantity: [1, [Validators.required, Validators.min(1)]],
    unitPrice: [0, [Validators.required, Validators.min(0)]],
    location: ["MAIN"]
  });
  branchCtx = inject(BranchContext);
  constructor(gql) {
    this.gql = gql;
    this.perm.load();
    this.loadProducts();
    this.load();
  }
  openDeleteConfirm(id) {
    this.pendingDeleteOrderId.set(String(id));
    this.adminCode.set("");
    this.deleteError.set(null);
    if (this.perm.isAdmin()) {
      this.confirmDeleteOpen.set(true);
    } else {
      this.adminCodeOpen.set(true);
    }
  }
  cancelDeleteConfirm() {
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteOrderId.set(null);
  }
  cancelAdminCode() {
    this.adminCodeOpen.set(false);
    this.pendingDeleteOrderId.set(null);
    this.adminCode.set("");
    this.deleteError.set(null);
  }
  confirmDelete() {
    const id = this.pendingDeleteOrderId();
    if (!id)
      return;
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteOrderId.set(null);
    this.deleteSale(id, null);
  }
  confirmAdminCodeDelete() {
    const id = this.pendingDeleteOrderId();
    const code = this.adminCode().trim();
    if (!id)
      return;
    if (!code) {
      this.deleteError.set("Admin approval code is required to delete a sale");
      return;
    }
    this.deleteSale(id, code);
  }
  toggleDetails(o) {
    const id = String(o.id);
    this.detailsOrderId.set(this.detailsOrderId() === id ? null : id);
  }
  openCreate() {
    this.error.set(null);
    this.editingOrderId.set(null);
    this.headerForm.reset({ customer: "", referenceNumber: "" });
    this.lineForm.reset({ productId: null, quantity: 1, unitPrice: 0, location: this.branchCtx.writeBranch() });
    this.lines.set([]);
    this.productQuery.set("");
    this.createOpen.set(true);
  }
  openEdit(o) {
    this.error.set(null);
    this.editingOrderId.set(String(o.id));
    this.headerForm.reset({
      customer: o.customer ?? "",
      referenceNumber: o.referenceNumber ?? ""
    });
    this.lineForm.reset({ productId: null, quantity: 1, unitPrice: 0, location: this.branchCtx.writeBranch() });
    this.lines.set((o.lines ?? []).map((l) => ({
      productId: Number(l.productId),
      quantity: Number(l.quantity ?? 0),
      unitPrice: Number(l.unitPrice ?? 0),
      location: l.location?.trim() ? String(l.location).trim() : "MAIN"
    })));
    this.productQuery.set("");
    this.createOpen.set(true);
  }
  closeCreate() {
    this.createOpen.set(false);
    this.editingOrderId.set(null);
  }
  loadProducts() {
    const q = `query Products($filter: ProductFilter) {
      products(filter: $filter) {
        id
        sku
        name
        sellingPrice
        active
      }
    }`;
    this.gql.request(q, { filter: null }).subscribe({
      next: (res) => {
        this.products.set(res.products);
      },
      error: () => {
        this.products.set([]);
      }
    });
  }
  onProductChanged() {
    const raw = this.lineForm.getRawValue();
    const productId = Number(raw.productId ?? 0);
    if (!Number.isFinite(productId) || productId <= 0)
      return;
    const p = this.products().find((x) => Number(x.id) === productId);
    if (!p)
      return;
    this.lineForm.patchValue({ unitPrice: Number(p.sellingPrice ?? 0) });
  }
  lineTotal(quantity, unitPrice) {
    const q = Number(quantity ?? 0);
    const p = Number(unitPrice ?? 0);
    if (!Number.isFinite(q) || !Number.isFinite(p))
      return 0;
    return q * p;
  }
  currentLineTotal() {
    const raw = this.lineForm.getRawValue();
    return this.lineTotal(raw.quantity, raw.unitPrice);
  }
  grandTotal() {
    return this.lines().reduce((sum, l) => sum + this.lineTotal(l.quantity, l.unitPrice), 0);
  }
  saleTotalValue(o) {
    return (o.lines ?? []).reduce((sum, l) => sum + Number(l.quantity ?? 0) * Number(l.unitPrice ?? 0), 0);
  }
  isToday(soldAt) {
    const d = new Date(soldAt);
    if (isNaN(d.getTime()))
      return false;
    const now = /* @__PURE__ */ new Date();
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
  }
  isThisWeek(soldAt) {
    const d = new Date(soldAt);
    if (isNaN(d.getTime()))
      return false;
    const now = /* @__PURE__ */ new Date();
    const monday = new Date(now);
    monday.setDate(now.getDate() - (now.getDay() + 6) % 7);
    monday.setHours(0, 0, 0, 0);
    return d.getTime() >= monday.getTime();
  }
  isThisMonth(soldAt) {
    const d = new Date(soldAt);
    if (isNaN(d.getTime()))
      return false;
    const now = /* @__PURE__ */ new Date();
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
  }
  matchesDate(dateStr) {
    const df = this.dateFilter();
    if (!df)
      return true;
    const d = new Date(dateStr);
    if (isNaN(d.getTime()))
      return false;
    const [y, m, day] = df.split("-").map(Number);
    return d.getFullYear() === y && d.getMonth() === m - 1 && d.getDate() === day;
  }
  matchesQuery(o) {
    const q = this.query().trim().toLowerCase();
    if (!q)
      return true;
    return (o.customer ?? "").toLowerCase().includes(q) || (o.referenceNumber ?? "").toLowerCase().includes(q) || (o.soldBy ?? "").toLowerCase().includes(q) || (o.lines ?? []).some((l) => (l.productName ?? "").toLowerCase().includes(q) || (l.sku ?? "").toLowerCase().includes(q));
  }
  matchesCartQuery(c) {
    const q = this.query().trim().toLowerCase();
    if (!q)
      return true;
    return (c.customer ?? "").toLowerCase().includes(q) || (c.referenceNumber ?? "").toLowerCase().includes(q) || (c.createdBy ?? "").toLowerCase().includes(q) || (c.lines ?? []).some((l) => (l.productName ?? "").toLowerCase().includes(q));
  }
  setTab(tab) {
    this.activeTab.set(tab);
    this.pageIndex.set(0);
    this.detailsOrderId.set(null);
  }
  tabClass(tab) {
    return this.activeTab() === tab ? "bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow-sm" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100";
  }
  onDateChange(value) {
    this.dateFilter.set(value);
    this.pageIndex.set(0);
    if (value && this.activeTab() !== "pending") {
      this.activeTab.set("all");
    }
  }
  onQueryChange(value) {
    this.query.set(value);
    this.pageIndex.set(0);
  }
  clearFilters() {
    this.dateFilter.set("");
    this.query.set("");
    this.pageIndex.set(0);
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const q = `query SalesOrders($branch: String) { salesOrders(branch: $branch) { id customer referenceNumber soldAt soldBy lines { id productId sku productName quantity location unitPrice deductions { id batchId batchNumber expiryDate quantity } } } }`;
    this.gql.request(q, { branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        const sorted = (res.salesOrders ?? []).slice().sort((a, b) => {
          const t = new Date(b.soldAt).getTime() - new Date(a.soldAt).getTime();
          return t !== 0 ? t : Number(b.id) - Number(a.id);
        });
        this.orders.set(sorted);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load sales orders");
        this.loading.set(false);
      }
    });
    const cq = `query PendingCarts { pendingCounterCarts { id customer referenceNumber createdAt createdBy total lines { productName quantity unitPrice location } } }`;
    this.gql.request(cq).subscribe({
      next: (res) => this.pendingCarts.set(res.pendingCounterCarts ?? []),
      error: () => this.pendingCarts.set([])
    });
  }
  addLine() {
    this.lineForm.markAllAsTouched();
    const raw = this.lineForm.getRawValue();
    const productId = Number(raw.productId ?? 0);
    if (!Number.isFinite(productId) || productId <= 0) {
      this.error.set("Product is required");
      return;
    }
    const quantity = Number(raw.quantity ?? 0);
    if (!Number.isFinite(quantity) || quantity <= 0) {
      this.error.set("Quantity must be greater than 0");
      return;
    }
    const unitPrice = Number(raw.unitPrice ?? 0);
    if (!Number.isFinite(unitPrice)) {
      this.error.set("Unit price is required");
      return;
    }
    if (unitPrice < 0) {
      this.error.set("Unit price must be 0 or more");
      return;
    }
    this.error.set(null);
    this.lines.set([
      ...this.lines(),
      {
        productId,
        quantity,
        unitPrice,
        location: raw.location?.trim() ? String(raw.location).trim() : null
      }
    ]);
    this.lineForm.reset({ productId: null, quantity: 1, unitPrice: 0, location: this.branchCtx.writeBranch() });
  }
  removeLine(index) {
    this.lines.set(this.lines().filter((_, i) => i !== index));
  }
  createSale() {
    this.saveSale();
  }
  saveSale() {
    if (!this.lines().length) {
      this.error.set("Add at least one line");
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    const header = this.headerForm.getRawValue();
    const editingId = this.editingOrderId();
    if (editingId) {
      const mutation2 = `mutation UpdateSale($input: UpdateSaleInput!) {
        updateSale(input: $input) {
          id soldAt
          lines { id productId sku productName quantity location unitPrice deductions { id batchId batchNumber expiryDate quantity } }
        }
      }`;
      this.gql.request(mutation2, {
        input: {
          id: editingId,
          customer: header.customer || null,
          referenceNumber: header.referenceNumber || null,
          lines: this.lines()
        }
      }).subscribe({
        next: () => {
          this.headerForm.reset({ customer: "", referenceNumber: "" });
          this.lines.set([]);
          this.createOpen.set(false);
          this.editingOrderId.set(null);
          this.load();
        },
        error: (e) => {
          this.error.set(e instanceof Error ? e.message : "Failed to update sale");
          this.loading.set(false);
        }
      });
      return;
    }
    const mutation = `mutation CreateSale($input: CreateSaleInput!) {
      createSale(input: $input) {
        id soldAt
        lines { id productId sku productName quantity location unitPrice deductions { id batchId batchNumber expiryDate quantity } }
      }
    }`;
    this.gql.request(mutation, {
      input: {
        customer: header.customer || null,
        referenceNumber: header.referenceNumber || null,
        lines: this.lines()
      }
    }).subscribe({
      next: () => {
        this.headerForm.reset({ customer: "", referenceNumber: "" });
        this.lines.set([]);
        this.createOpen.set(false);
        this.editingOrderId.set(null);
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to create sale");
        this.loading.set(false);
      }
    });
  }
  deleteSale(id, adminCode) {
    this.loading.set(true);
    this.error.set(null);
    this.deleteError.set(null);
    const mutation = `mutation DeleteSale($input: DeleteSaleInput!) { deleteSale(input: $input) }`;
    this.gql.request(mutation, { input: { id, adminCode } }).subscribe({
      next: () => {
        this.adminCodeOpen.set(false);
        this.pendingDeleteOrderId.set(null);
        this.adminCode.set("");
        this.load();
      },
      error: (e) => {
        const msg = e instanceof Error ? e.message : "Failed to delete sale";
        if (this.adminCodeOpen()) {
          this.deleteError.set(msg);
        } else {
          this.error.set(msg);
        }
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function SalesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SalesPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesPage, selectors: [["cis-sales-page"]], decls: 178, vars: 151, consts: [[1, "flex", "items-center"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-4", "flex", "items-center", "justify-end"], ["class", "rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white", 3, "click", 4, "ngIf"], [1, "mt-4", "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2", "xl:grid-cols-4"], ["type", "button", 1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "text-left", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700", "transition", "hover:ring-teal-300", "dark:hover:ring-teal-600", 3, "click"], [1, "flex", "items-center", "justify-between"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-slate-500", "dark:text-slate-400"], [1, "grid", "h-9", "w-9", "place-items-center", "rounded-xl", "bg-teal-50", "dark:bg-teal-900/40", "text-teal-600", "dark:text-teal-300"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v2m0 10v2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 12a8 8 0 11-16 0 8 8 0 0116 0z"], [1, "mt-1", "text-xl", "font-bold", "text-slate-900", "dark:text-slate-100"], [1, "mt-0.5", "text-xs", "text-slate-500", "dark:text-slate-400"], ["type", "button", 1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "text-left", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700", "transition", "hover:ring-emerald-300", "dark:hover:ring-emerald-600", 3, "click"], [1, "grid", "h-9", "w-9", "place-items-center", "rounded-xl", "bg-emerald-50", "dark:bg-emerald-900/40", "text-emerald-600", "dark:text-emerald-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["type", "button", 1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "text-left", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700", "transition", "hover:ring-amber-300", "dark:hover:ring-amber-600", 3, "click"], [1, "grid", "h-9", "w-9", "place-items-center", "rounded-xl", "bg-amber-50", "dark:bg-amber-900/40", "text-amber-600", "dark:text-amber-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["type", "button", 1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "text-left", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700", "transition", "hover:ring-pink-300", "dark:hover:ring-pink-600", 3, "click"], [1, "grid", "h-9", "w-9", "place-items-center", "rounded-xl", "bg-pink-50", "dark:bg-pink-900/40", "text-pink-600", "dark:text-pink-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 3h2l.4 2M7 13h10l4-8H5.4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7 13l-1.5 7h13L17 13"], ["maxWidthClass", "max-w-2xl", 3, "close", "open", "title"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "mt-4", "grid", "gap-3", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], ["formControlName", "customer", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["formControlName", "referenceNumber", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], [1, "mt-4", "rounded-xl", "bg-slate-50", "dark:bg-slate-700", "p-3", "ring-1", "ring-slate-100", "dark:ring-slate-600"], [1, "text-sm", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "grid", "gap-3", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "gap-2"], [1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]", 3, "input", "value", "placeholder"], ["formControlName", "productId", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]", 3, "change"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "quantity", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["type", "number", "step", "0.01", "formControlName", "unitPrice", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["formControlName", "location", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [1, "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-400"], [1, "text-slate-900", "dark:text-slate-100"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white"], ["class", "mt-4", 4, "ngIf"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-4", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "mt-4", "grid", "grid-cols-1", "gap-4", "xl:grid-cols-1"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-2"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "flex", "gap-1", "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "p-1"], ["type", "button", "class", "rounded-lg px-3 py-1.5 text-xs font-semibold transition", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "rounded-lg", "px-3", "py-1.5", "text-xs", "font-semibold", "transition", 3, "click", "ngClass"], ["class", "ml-1 rounded-full bg-amber-500 px-1.5 py-0.5 text-[9px] font-bold text-white", 4, "ngIf"], [1, "mt-3", "flex", "flex-wrap", "items-center", "gap-2"], [1, "relative", "flex-1", "min-w-[180px]"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "absolute", "left-3", "top-1/2", "h-4", "w-4", "-translate-y-1/2", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", 1, "w-full", "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "pl-9", "pr-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]", 3, "input", "value", "placeholder"], ["type", "date", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]", 3, "change", "value", "aria-label"], ["type", "button", "class", "rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600", 3, "click", 4, "ngIf"], [1, "mt-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], ["class", "mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700", 4, "ngIf"], [1, "mt-4", "text-xs", "text-slate-500", "dark:text-slate-400"], ["message", "Are you sure you want to delete this sale? This action cannot be undone.", "confirmButtonClass", "bg-[#B81104] hover:bg-[#7f0c03]", 3, "cancel", "confirm", "open", "title", "confirmText", "cancelText"], ["maxWidthClass", "max-w-md", 3, "close", "open", "title"], [1, "flex", "items-start", "gap-3"], [1, "grid", "h-10", "w-10", "shrink-0", "place-items-center", "rounded-xl", "bg-amber-50", "dark:bg-amber-900/40", "text-amber-600", "dark:text-amber-300"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], [1, "text-sm", "text-slate-600", "dark:text-slate-300"], [1, "mt-4", "grid", "gap-2", "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-300"], ["type", "password", "autocomplete", "off", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", "outline-none", "focus:border-[#7367d8]", 3, "input", "keydown.enter", "value"], ["class", "mt-3 flex items-center gap-2 rounded-xl bg-red-50 dark:bg-red-900/30 px-3 py-2 text-xs font-semibold text-red-700 dark:text-red-300", 4, "ngIf"], [1, "mt-5", "flex", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-700", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-[#B81104]", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-[#7f0c03]", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", 3, "click"], [3, "value"], [1, "mt-4"], [1, "mt-2", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], [1, "mt-2", "text-right", "text-sm", "font-semibold", "text-slate-700", "dark:text-slate-300"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "font-semibold", "text-slate-900", "dark:text-slate-100"], ["class", "text-xs text-slate-500 dark:text-slate-400", 4, "ngIf"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right"], ["type", "button", 1, "text-xs", "font-semibold", "text-[#B81104]", "dark:text-red-400", 3, "click"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "ml-1", "rounded-full", "bg-amber-500", "px-1.5", "py-0.5", "text-[9px]", "font-bold", "text-white"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [4, "ngFor", "ngForOf"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngIf"], [1, "px-3", "py-2", "text-xs", "text-slate-600", "dark:text-slate-400"], ["type", "button", 1, "cis-row-action", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["class", "cis-row-action", "type", "button", 3, "click", 4, "ngIf"], ["class", "cis-row-action cis-row-action-danger", "type", "button", 3, "click", 4, "ngIf"], ["class", "border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/50", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["type", "button", 1, "cis-row-action", "cis-row-action-danger", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "border-t", "border-slate-100", "dark:border-slate-700", "bg-slate-50/50", "dark:bg-slate-700/50"], ["colspan", "6", 1, "px-3", "py-3"], [1, "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-300"], [1, "inline-flex", "items-center", "rounded-full", "bg-pink-50", "dark:bg-pink-900/30", "px-2.5", "py-1", "text-[11px]", "font-semibold", "text-pink-700", "dark:text-indigo-400", "ring-1", "ring-inset", "ring-pink-200", "dark:ring-pink-700"], [1, "mt-2", "overflow-auto", "rounded-xl", "bg-white", "dark:bg-slate-800", "ring-1", "ring-indigo-100", "dark:ring-pink-700", "border", "border-indigo-100", "dark:border-indigo-700"], [1, "w-full", "border-collapse", "text-xs"], [1, "bg-pink-50", "dark:bg-pink-900/30"], [1, "px-3", "py-2", "text-left", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-indigo-100 dark:border-indigo-700", 4, "ngFor", "ngForOf"], [1, "border-t", "border-indigo-100", "dark:border-indigo-700"], ["colspan", "6", 1, "px-3", "py-6", "text-center", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "border-t", "border-slate-100", "dark:border-slate-700", "bg-slate-50/50", "dark:bg-slate-700/50", "px-3", "py-2", "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "rounded-full", "bg-amber-100", "dark:bg-amber-900/40", "px-2", "py-0.5", "text-[10px]", "font-bold", "text-amber-800", "dark:text-amber-300"], ["colspan", "7", 1, "px-3", "py-6", "text-center", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "mt-3", "flex", "items-center", "gap-2", "rounded-xl", "bg-red-50", "dark:bg-red-900/30", "px-3", "py-2", "text-xs", "font-semibold", "text-red-700", "dark:text-red-300"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-4", "w-4", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"]], template: function SalesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Sales & Stock Out");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275template(4, SalesPage_button_4_Template, 3, 3, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
      \u0275\u0275listener("click", function SalesPage_Template_button_click_6_listener() {
        return ctx.setTab("all");
      });
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 9);
      \u0275\u0275element(13, "path", 10)(14, "path", 11)(15, "path", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "div", 13);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 14);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "button", 15);
      \u0275\u0275listener("click", function SalesPage_Template_button_click_22_listener() {
        return ctx.setTab("today");
      });
      \u0275\u0275elementStart(23, "div", 6)(24, "div", 7);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 9);
      \u0275\u0275element(29, "path", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(30, "div", 13);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 14);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "button", 18);
      \u0275\u0275listener("click", function SalesPage_Template_button_click_36_listener() {
        return ctx.setTab("pending");
      });
      \u0275\u0275elementStart(37, "div", 6)(38, "div", 7);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(42, "svg", 9);
      \u0275\u0275element(43, "path", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(44, "div", 13);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 14);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "button", 21);
      \u0275\u0275listener("click", function SalesPage_Template_button_click_50_listener() {
        return ctx.setTab("pending");
      });
      \u0275\u0275elementStart(51, "div", 6)(52, "div", 7);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 9);
      \u0275\u0275element(57, "path", 23)(58, "path", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(59, "div", 13);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 14);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "cis-modal", 25);
      \u0275\u0275listener("close", function SalesPage_Template_cis_modal_close_64_listener() {
        return ctx.closeCreate();
      });
      \u0275\u0275elementStart(65, "div", 26);
      \u0275\u0275text(66, "Expired batches are blocked automatically by backend.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "form", 27);
      \u0275\u0275listener("ngSubmit", function SalesPage_Template_form_ngSubmit_67_listener() {
        return ctx.createSale();
      });
      \u0275\u0275elementStart(68, "div", 28)(69, "label", 29);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275element(72, "input", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "label", 29);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275element(76, "input", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 32)(78, "h4", 33);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "form", 34);
      \u0275\u0275listener("ngSubmit", function SalesPage_Template_form_ngSubmit_81_listener() {
        return ctx.addLine();
      });
      \u0275\u0275elementStart(82, "div", 35)(83, "label", 29);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementStart(86, "input", 36);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275listener("input", function SalesPage_Template_input_input_86_listener($event) {
        return ctx.productQuery.set($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "div", 28)(89, "label", 29);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementStart(92, "select", 37);
      \u0275\u0275listener("change", function SalesPage_Template_select_change_92_listener() {
        return ctx.onProductChanged();
      });
      \u0275\u0275elementStart(93, "option", 38);
      \u0275\u0275text(94);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(96, SalesPage_option_96_Template, 2, 2, "option", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "label", 29);
      \u0275\u0275text(98);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275element(100, "input", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "label", 29);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275element(104, "input", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "label", 29);
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementStart(108, "select", 42);
      \u0275\u0275template(109, SalesPage_option_109_Template, 2, 3, "option", 43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "div", 44);
      \u0275\u0275text(111);
      \u0275\u0275pipe(112, "translate");
      \u0275\u0275elementStart(113, "span", 45);
      \u0275\u0275text(114);
      \u0275\u0275pipe(115, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "button", 46);
      \u0275\u0275text(117);
      \u0275\u0275pipe(118, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(119, SalesPage_div_119_Template, 32, 25, "div", 47)(120, SalesPage_div_120_Template, 2, 1, "div", 48);
      \u0275\u0275elementStart(121, "div", 49)(122, "button", 50);
      \u0275\u0275listener("click", function SalesPage_Template_button_click_122_listener() {
        return ctx.closeCreate();
      });
      \u0275\u0275text(123);
      \u0275\u0275pipe(124, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "button", 51);
      \u0275\u0275listener("click", function SalesPage_Template_button_click_125_listener() {
        return ctx.createSale();
      });
      \u0275\u0275text(126);
      \u0275\u0275pipe(127, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "div", 52)(129, "section", 53)(130, "div", 54)(131, "h3", 55);
      \u0275\u0275text(132, "Sales Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 56);
      \u0275\u0275template(134, SalesPage_button_134_Template, 3, 4, "button", 57);
      \u0275\u0275elementStart(135, "button", 58);
      \u0275\u0275listener("click", function SalesPage_Template_button_click_135_listener() {
        return ctx.setTab("pending");
      });
      \u0275\u0275text(136);
      \u0275\u0275pipe(137, "translate");
      \u0275\u0275template(138, SalesPage_span_138_Template, 2, 1, "span", 59);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "div", 60)(140, "div", 61);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(141, "svg", 62);
      \u0275\u0275element(142, "path", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(143, "input", 64);
      \u0275\u0275pipe(144, "translate");
      \u0275\u0275listener("input", function SalesPage_Template_input_input_143_listener($event) {
        return ctx.onQueryChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "input", 65);
      \u0275\u0275pipe(146, "translate");
      \u0275\u0275listener("change", function SalesPage_Template_input_change_145_listener($event) {
        return ctx.onDateChange($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(147, SalesPage_button_147_Template, 3, 3, "button", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "cis-pager", 67);
      \u0275\u0275twoWayListener("pageSizeChange", function SalesPage_Template_cis_pager_pageSizeChange_148_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      })("pageIndexChange", function SalesPage_Template_cis_pager_pageIndexChange_148_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(149, SalesPage_div_149_Template, 24, 17, "div", 68)(150, SalesPage_div_150_Template, 31, 26, "div", 68);
      \u0275\u0275elementStart(151, "div", 69);
      \u0275\u0275text(152, " Tip: Stock deductions per line are stored in backend and visible in GraphQL response. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(153, "cis-confirm-dialog", 70);
      \u0275\u0275pipe(154, "translate");
      \u0275\u0275pipe(155, "translate");
      \u0275\u0275pipe(156, "translate");
      \u0275\u0275listener("cancel", function SalesPage_Template_cis_confirm_dialog_cancel_153_listener() {
        return ctx.cancelDeleteConfirm();
      })("confirm", function SalesPage_Template_cis_confirm_dialog_confirm_153_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "cis-modal", 71);
      \u0275\u0275pipe(158, "translate");
      \u0275\u0275listener("close", function SalesPage_Template_cis_modal_close_157_listener() {
        return ctx.cancelAdminCode();
      });
      \u0275\u0275elementStart(159, "div", 72)(160, "span", 73);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(161, "svg", 74);
      \u0275\u0275element(162, "path", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(163, "p", 76);
      \u0275\u0275text(164);
      \u0275\u0275pipe(165, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "label", 77);
      \u0275\u0275text(167);
      \u0275\u0275pipe(168, "translate");
      \u0275\u0275elementStart(169, "input", 78);
      \u0275\u0275listener("input", function SalesPage_Template_input_input_169_listener($event) {
        return ctx.adminCode.set($event.target.value);
      })("keydown.enter", function SalesPage_Template_input_keydown_enter_169_listener() {
        return ctx.confirmAdminCodeDelete();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(170, SalesPage_div_170_Template, 4, 1, "div", 79);
      \u0275\u0275elementStart(171, "div", 80)(172, "button", 81);
      \u0275\u0275listener("click", function SalesPage_Template_button_click_172_listener() {
        return ctx.cancelAdminCode();
      });
      \u0275\u0275text(173);
      \u0275\u0275pipe(174, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "button", 82);
      \u0275\u0275listener("click", function SalesPage_Template_button_click_175_listener() {
        return ctx.confirmAdminCodeDelete();
      });
      \u0275\u0275text(176);
      \u0275\u0275pipe(177, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.perm.canCreate("SALES"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 76, "sales.totalSales"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 78, ctx.totalSalesValue()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.orders().length, " ", \u0275\u0275pipeBind1(21, 80, "sales.ordersCount"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 82, "sales.todayCollection"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 84, ctx.todayCollectionValue()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.filteredOrders().length, " ", \u0275\u0275pipeBind1(35, 86, "sales.ordersCount"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 88, "sales.outstanding"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 90, ctx.outstandingValue()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 92, "sales.inPendingCarts"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 94, "sales.pending"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.pendingCarts().length);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 96, "sales.savedCarts"));
      \u0275\u0275advance(2);
      \u0275\u0275property("open", ctx.createOpen())("title", ctx.editingOrderId() ? "Edit Sale (FIFO)" : "Create Sale (FIFO)");
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.headerForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(71, 98, "common.customer"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(75, 100, "common.reference"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 102, "common.addLine"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.lineForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(85, 104, "common.productSearch"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(87, 106, "common.searchProductSku")))("value", ctx.productQuery());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(91, 108, "common.productName"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(95, 110, "common.selectProduct"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.filteredProducts());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(99, 112, "common.qty"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(103, 114, "common.unitPrice"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(107, 116, "common.branch"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.branchCtx.locked());
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.branchCtx.options());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(112, 118, "common.lineTotal"), ": ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(115, 120, ctx.currentLineTotal()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(118, 122, "common.addLine"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.lines().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(124, 124, "common.close"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(127, 126, "common.save"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(150, _c05));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.tabClass("pending"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(137, 128, "sales.pending"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.pendingCarts().length);
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(144, 130, "sales.searchPlaceholder")))("value", ctx.query());
      \u0275\u0275advance(2);
      \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate(\u0275\u0275pipeBind1(146, 132, "common.date")));
      \u0275\u0275property("value", ctx.dateFilter());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.dateFilter() || ctx.query());
      \u0275\u0275advance();
      \u0275\u0275property("total", ctx.activeTab() === "pending" ? ctx.filteredCarts().length : ctx.filteredOrders().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab() !== "pending");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab() === "pending");
      \u0275\u0275advance(3);
      \u0275\u0275property("title", \u0275\u0275interpolate1("", \u0275\u0275pipeBind1(154, 134, "common.delete"), " sale?"))("confirmText", \u0275\u0275interpolate(\u0275\u0275pipeBind1(155, 136, "common.delete")))("cancelText", \u0275\u0275interpolate(\u0275\u0275pipeBind1(156, 138, "common.close")))("open", ctx.confirmDeleteOpen());
      \u0275\u0275advance(4);
      \u0275\u0275property("title", \u0275\u0275interpolate(\u0275\u0275pipeBind1(158, 140, "sales.adminApprovalRequired")))("open", ctx.adminCodeOpen());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(165, 142, "sales.adminCodeHelp"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(168, 144, "sales.adminCode"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.adminCode());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteError());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(174, 146, "common.close"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading() || !ctx.adminCode().trim());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(177, 148, "common.delete"), " ");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ConfirmDialogComponent, ModalComponent, RowActionsMenuComponent, PagerComponent, DatePipe, MoneyPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesPage, [{
    type: Component,
    args: [{ selector: "cis-sales-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, ConfirmDialogComponent, ModalComponent, MoneyPipe, TranslatePipe, RowActionsMenuComponent, PagerComponent], template: `<div class="flex items-center">
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Sales & Stock Out</h2>
</div>

<div class="mt-4 flex items-center justify-end">
  <button *ngIf="perm.canCreate('SALES')" class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white" (click)="openCreate()">
    {{ 'common.create' | translate }} Sale
    
  </button>
</div>

<div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
  <button type="button" (click)="setTab('all')" class="rounded-2xl bg-white dark:bg-slate-800 p-4 text-left shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 transition hover:ring-teal-300 dark:hover:ring-teal-600">
    <div class="flex items-center justify-between">
      <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{{ 'sales.totalSales' | translate }}</div>
      <span class="grid h-9 w-9 place-items-center rounded-xl bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-300">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v2m0 10v2" /><path stroke-linecap="round" stroke-linejoin="round" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
      </span>
    </div>
    <div class="mt-1 text-xl font-bold text-slate-900 dark:text-slate-100">{{ totalSalesValue() | money }}</div>
    <div class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{{ orders().length }} {{ 'sales.ordersCount' | translate }}</div>
  </button>

  <button type="button" (click)="setTab('today')" class="rounded-2xl bg-white dark:bg-slate-800 p-4 text-left shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 transition hover:ring-emerald-300 dark:hover:ring-emerald-600">
    <div class="flex items-center justify-between">
      <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{{ 'sales.todayCollection' | translate }}</div>
      <span class="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      </span>
    </div>
    <div class="mt-1 text-xl font-bold text-slate-900 dark:text-slate-100">{{ todayCollectionValue() | money }}</div>
    <div class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{{ filteredOrders().length }} {{ 'sales.ordersCount' | translate }}</div>
  </button>

  <button type="button" (click)="setTab('pending')" class="rounded-2xl bg-white dark:bg-slate-800 p-4 text-left shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 transition hover:ring-amber-300 dark:hover:ring-amber-600">
    <div class="flex items-center justify-between">
      <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{{ 'sales.outstanding' | translate }}</div>
      <span class="grid h-9 w-9 place-items-center rounded-xl bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </span>
    </div>
    <div class="mt-1 text-xl font-bold text-slate-900 dark:text-slate-100">{{ outstandingValue() | money }}</div>
    <div class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{{ 'sales.inPendingCarts' | translate }}</div>
  </button>

  <button type="button" (click)="setTab('pending')" class="rounded-2xl bg-white dark:bg-slate-800 p-4 text-left shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 transition hover:ring-pink-300 dark:hover:ring-pink-600">
    <div class="flex items-center justify-between">
      <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{{ 'sales.pending' | translate }}</div>
      <span class="grid h-9 w-9 place-items-center rounded-xl bg-pink-50 dark:bg-pink-900/40 text-pink-600 dark:text-pink-300">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" /><path stroke-linecap="round" stroke-linejoin="round" d="M7 13l-1.5 7h13L17 13" /></svg>
      </span>
    </div>
    <div class="mt-1 text-xl font-bold text-slate-900 dark:text-slate-100">{{ pendingCarts().length }}</div>
    <div class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{{ 'sales.savedCarts' | translate }}</div>
  </button>
</div>

<cis-modal
  [open]="createOpen()"
  [title]="editingOrderId() ? ('Edit Sale (FIFO)') : ('Create Sale (FIFO)')"
  maxWidthClass="max-w-2xl"
  (close)="closeCreate()"
>
  <div class="text-xs text-slate-500 dark:text-slate-400">Expired batches are blocked automatically by backend.</div>

  <form class="mt-4 grid gap-3" [formGroup]="headerForm" (ngSubmit)="createSale()">
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        {{ 'common.customer' | translate }}
        <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="customer" />
      </label>
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
        {{ 'common.reference' | translate }}
        <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="referenceNumber" />
      </label>
    </div>
  </form>

  <div class="mt-4 rounded-xl bg-slate-50 dark:bg-slate-700 p-3 ring-1 ring-slate-100 dark:ring-slate-600">
    <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ 'common.addLine' | translate }}</h4>
    <form class="mt-3 grid gap-3" [formGroup]="lineForm" (ngSubmit)="addLine()">
      <div class="grid grid-cols-1 gap-2">
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
          {{ 'common.productSearch' | translate }}
          <input
            class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
            [value]="productQuery()"
            (input)="productQuery.set(($any($event.target)).value)"
            placeholder="{{ 'common.searchProductSku' | translate }}"
          />
        </label>
      </div>

      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
          {{ 'common.productName' | translate }}
          <select
            class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
            formControlName="productId"
            (change)="onProductChanged()"
          >
            <option [ngValue]="null">{{ 'common.selectProduct' | translate }}</option>
            <option *ngFor="let p of filteredProducts()" [ngValue]="+p.id">
              {{ p.name }}
               <!-- ({{ p.sku }}) -->
            </option>
          </select>
        </label>
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
          {{ 'common.qty' | translate }}
          <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="number" formControlName="quantity" />
        </label>
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
          {{ 'common.unitPrice' | translate }}
          <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="number" step="0.01" formControlName="unitPrice" />
        </label>
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">
          {{ 'common.branch' | translate }}
          <select class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="location" [disabled]="branchCtx.locked()">
            <option *ngFor="let b of branchCtx.options()" [value]="b.code">{{ b.name }} ({{ b.code }})</option>
          </select>
        </label>
      </div>

      <div class="text-right text-xs font-semibold text-slate-600 dark:text-slate-400">
        {{ 'common.lineTotal' | translate }}: <span class="text-slate-900 dark:text-slate-100">{{ currentLineTotal() | money}}</span>
      </div>

      <button class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white" type="submit">
        {{ 'common.addLine' | translate }}
      </button>
    </form>
  </div>

  <div class="mt-4" *ngIf="lines().length">
    <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ 'common.lines' | translate }}</h4>
    <div class="mt-2 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
      <table class="w-full border-collapse text-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.location' | translate }}</th>
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.qty' | translate }}</th>
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.price' | translate }}</th>
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.total' | translate }}</th>
            <th class="px-3 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let l of displayLines(); let idx = index" class="border-t border-slate-100 dark:border-slate-700">
            <td class="px-3 py-2">
              <div class="font-semibold text-slate-900 dark:text-slate-100">{{ l.product?.name || ('#' + l.productId) }}</div>
              <div class="text-xs text-slate-500 dark:text-slate-400" *ngIf="l.product?.sku">{{ l.product?.sku }}</div>
            </td>
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ l.location || 'MAIN' }}</td>
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ l.quantity }}</td>
            <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ l.unitPrice | money}}</td>
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ lineTotal(l.quantity, l.unitPrice) | money}}</td>
            <td class="px-3 py-2 text-right">
              <button class="text-xs font-semibold text-[#B81104] dark:text-red-400" type="button" (click)="removeLine(idx)">{{ 'common.remove' | translate }}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-2 text-right text-sm font-semibold text-slate-700 dark:text-slate-300">
      {{ 'common.grandTotal' | translate }}: <span class="text-slate-900 dark:text-slate-100">{{ grandTotal() | money}}</span>
    </div>
  </div>

  <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>

  <div class="mt-4 flex items-center justify-end gap-2">
    <button
      type="button"
      class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"
      (click)="closeCreate()"
    >
      {{ 'common.close' | translate }}
    </button>
    <button
      type="button"
      class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
      (click)="createSale()"
      [disabled]="loading()"
    >
      {{ 'common.save' | translate }}
    </button>
  </div>
</cis-modal>

<div class="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-1">
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
    <div class="flex flex-wrap items-center justify-between gap-2">
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">Sales Orders</h3>
      <div class="flex gap-1 rounded-xl bg-slate-100 dark:bg-slate-700 p-1">
        <button
          *ngFor="let t of ['all', 'today', 'week', 'month']"
          type="button"
          (click)="setTab($any(t))"
          class="rounded-lg px-3 py-1.5 text-xs font-semibold transition"
          [ngClass]="tabClass(t)"
        >{{ ('common.' + (t === 'week' ? 'thisWeek' : t === 'month' ? 'thisMonth' : t)) | translate }}</button>
        <button
          type="button"
          (click)="setTab('pending')"
          class="rounded-lg px-3 py-1.5 text-xs font-semibold transition"
          [ngClass]="tabClass('pending')"
        >{{ 'sales.pending' | translate }}<span *ngIf="pendingCarts().length" class="ml-1 rounded-full bg-amber-500 px-1.5 py-0.5 text-[9px] font-bold text-white">{{ pendingCarts().length }}</span></button>
      </div>
    </div>

    <div class="mt-3 flex flex-wrap items-center gap-2">
      <div class="relative flex-1 min-w-[180px]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          class="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
          [value]="query()"
          (input)="onQueryChange($any($event.target).value)"
          placeholder="{{ 'sales.searchPlaceholder' | translate }}"
        />
      </div>
      <input
        type="date"
        class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
        [value]="dateFilter()"
        (change)="onDateChange($any($event.target).value)"
        aria-label="{{ 'common.date' | translate }}"
      />
      <button
        *ngIf="dateFilter() || query()"
        type="button"
        class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"
        (click)="clearFilters()"
      >{{ 'common.clear' | translate }}</button>
    </div>

    <cis-pager class="mt-3 block" [total]="activeTab() === 'pending' ? filteredCarts().length : filteredOrders().length" [(pageSize)]="pageSize" [(pageIndex)]="pageIndex" />

    <div *ngIf="activeTab() !== 'pending'" class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
      <table class="w-full border-collapse text-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Sold At</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.customer' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.reference' | translate }}</th>
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.lines' | translate }}</th>
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.total' | translate }}</th>
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <ng-container *ngFor="let o of displayedOrders()">
            <tr class="border-t border-slate-100 dark:border-slate-700">
              <td class="px-3 py-2 text-xs text-slate-600 dark:text-slate-400">{{ o.soldAt }}</td>
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ o.customer || '-' }}</td>
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ o.referenceNumber || '-' }}</td>
              <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ o.lines.length }}</td>
              <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ saleTotalValue(o) | money}}</td>
              <td class="px-3 py-2 text-right">
                <cis-row-actions>
                  <button
                    class="cis-row-action"
                    type="button"
                    (click)="toggleDetails(o)"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    {{ detailsOrderId() === o.id ? 'Hide details' : 'Details' }}
                  </button>

                  <button
                    *ngIf="perm.canEdit('SALES')"
                    class="cis-row-action"
                    type="button"
                    (click)="openEdit(o)"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    {{ 'common.edit' | translate }}
                  </button>

                  <button
                    *ngIf="perm.canDelete('SALES')"
                    class="cis-row-action cis-row-action-danger"
                    type="button"
                    (click)="openDeleteConfirm(o.id)"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    {{ 'common.delete' | translate }}
                  </button>
                </cis-row-actions>
              </td>
            </tr>

            <tr *ngIf="detailsOrderId() === o.id" class="border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/50">
              <td class="px-3 py-3" colspan="6">
                <div class="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span
                    class="inline-flex items-center rounded-full bg-pink-50 dark:bg-pink-900/30 px-2.5 py-1 text-[11px] font-semibold text-pink-700 dark:text-indigo-400 ring-1 ring-inset ring-pink-200 dark:ring-pink-700"
                    >Sale details</span
                  >
                </div>
                <div class="mt-2 overflow-auto rounded-xl bg-white dark:bg-slate-800 ring-1 ring-indigo-100 dark:ring-pink-700 border border-indigo-100 dark:border-indigo-700">
                  <table class="w-full border-collapse text-xs">
                    <thead class="bg-pink-50 dark:bg-pink-900/30">
                      <tr>
                        <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.customer' | translate }}</th>
                        <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>
                        <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.location' | translate }}</th>
                        <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.quantity' | translate }}</th>
                        <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.price' | translate }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr *ngFor="let l of o.lines" class="border-t border-indigo-100 dark:border-indigo-700">
                        <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ o.customer || '-' }}</td>
                        <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ l.productName }}</td>
                        <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ l.location || 'MAIN' }}</td>
                        <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ l.quantity }}</td>
                        <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ l.unitPrice | money }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </ng-container>

          <tr *ngIf="!filteredOrders().length" class="border-t border-slate-100 dark:border-slate-700">
            <td class="px-3 py-6 text-center text-sm text-slate-600 dark:text-slate-400" colspan="6">No sales orders yet</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div *ngIf="activeTab() === 'pending'" class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">
      <table class="w-full border-collapse text-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.created' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.customer' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.reference' | translate }}</th>
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.seller' | translate }}</th>
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.lines' | translate }}</th>
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.total' | translate }}</th>
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.status' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let c of displayedCarts()" class="border-t border-slate-100 dark:border-slate-700">
            <td class="px-3 py-2 text-xs text-slate-600 dark:text-slate-400">{{ c.createdAt | date:'yyyy-MM-dd HH:mm' }}</td>
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ c.customer || '-' }}</td>
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ c.referenceNumber || '-' }}</td>
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ c.createdBy || '-' }}</td>
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ c.lines.length }}</td>
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ c.total | money }}</td>
            <td class="px-3 py-2 text-right">
              <span class="rounded-full bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 text-[10px] font-bold text-amber-800 dark:text-amber-300">PENDING</span>
            </td>
          </tr>
          <tr *ngIf="!pendingCarts().length" class="border-t border-slate-100 dark:border-slate-700">
            <td class="px-3 py-6 text-center text-sm text-slate-600 dark:text-slate-400" colspan="7">No pending sales</td>
          </tr>
        </tbody>
      </table>
      <div class="border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/50 px-3 py-2 text-xs text-slate-500 dark:text-slate-400">
        {{ 'sales.pendingHelp' | translate }}
      </div>
    </div>

    <div class="mt-4 text-xs text-slate-500 dark:text-slate-400">
      Tip: Stock deductions per line are stored in backend and visible in GraphQL response.
    </div>
  </section>
</div>

<cis-confirm-dialog
  [open]="confirmDeleteOpen()"
  title="{{ 'common.delete' | translate }} sale?"
  message="Are you sure you want to delete this sale? This action cannot be undone."
  confirmText="{{ 'common.delete' | translate }}"
  cancelText="{{ 'common.close' | translate }}"
  confirmButtonClass="bg-[#B81104] hover:bg-[#7f0c03]"
  (cancel)="cancelDeleteConfirm()"
  (confirm)="confirmDelete()"
></cis-confirm-dialog>

<cis-modal
  [open]="adminCodeOpen()"
  title="{{ 'sales.adminApprovalRequired' | translate }}"
  maxWidthClass="max-w-md"
  (close)="cancelAdminCode()"
>
  <div class="flex items-start gap-3">
    <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    </span>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      {{ 'sales.adminCodeHelp' | translate }}
    </p>
  </div>

  <label class="mt-4 grid gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
    {{ 'sales.adminCode' | translate }}
    <input
      type="password"
      class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-[#7367d8]"
      [value]="adminCode()"
      (input)="adminCode.set($any($event.target).value)"
      (keydown.enter)="confirmAdminCodeDelete()"
      autocomplete="off"
    />
  </label>

  <div *ngIf="deleteError()" class="mt-3 flex items-center gap-2 rounded-xl bg-red-50 dark:bg-red-900/30 px-3 py-2 text-xs font-semibold text-red-700 dark:text-red-300">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>
    {{ deleteError() }}
  </div>

  <div class="mt-5 flex justify-end gap-2">
    <button
      type="button"
      class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"
      (click)="cancelAdminCode()"
    >
      {{ 'common.close' | translate }}
    </button>
    <button
      type="button"
      class="rounded-xl bg-[#B81104] px-4 py-2 text-sm font-semibold text-white hover:bg-[#7f0c03] disabled:cursor-not-allowed disabled:opacity-70"
      [disabled]="loading() || !adminCode().trim()"
      (click)="confirmAdminCodeDelete()"
    >
      {{ 'common.delete' | translate }}
    </button>
  </div>
</cis-modal>
` }]
  }], () => [{ type: GraphqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesPage, { className: "SalesPage", filePath: "app/features/sales/sales.page.ts", lineNumber: 74 });
})();

// src/app/features/my-sales/my-sales.page.ts
function MySalesPage_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function MySalesPage_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "common.create"), " ", \u0275\u0275pipeBind1(3, 4, "nav.mySales"), " ");
  }
}
function MySalesPage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function MySalesPage_div_14_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function MySalesPage_div_14_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const s_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit(s_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.edit"), " ");
  }
}
function MySalesPage_div_14_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function MySalesPage_div_14_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const s_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(s_r4.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.delete"), " ");
  }
}
function MySalesPage_div_14_div_27_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "div")(5, "div", 44);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 28)(11, "div", 44);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 45);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "div", 44);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 45);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "money");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const l_r7 = ctx.$implicit;
    const s_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r7.productName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "common.seller"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r4.customer || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, "common.qty"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r7.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 11, "common.price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 13, l_r7.unitPrice));
  }
}
function MySalesPage_div_14_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39);
    \u0275\u0275template(6, MySalesPage_div_14_div_27_div_6_Template, 23, 15, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 3, "common.view"), " ", \u0275\u0275pipeBind1(4, 5, "common.details"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", s_r4.lines);
  }
}
function MySalesPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 28)(11, "div", 25);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 29);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 27);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 30)(21, "button", 31);
    \u0275\u0275listener("click", function MySalesPage_div_14_Template_button_click_21_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDetails(s_r4));
    });
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, MySalesPage_div_14_button_25_Template, 3, 3, "button", 32)(26, MySalesPage_div_14_button_26_Template, 3, 3, "button", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, MySalesPage_div_14_div_27_Template, 7, 7, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r4.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.customer || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(9, 12, "common.reference"), ": ", s_r4.referenceNumber || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 14, "common.total"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 16, ctx_r1.saleTotalValue(s_r4)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", s_r4.lines.length, " ", \u0275\u0275pipeBind1(19, 18, "common.lines"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailsSaleId() === s_r4.id ? \u0275\u0275pipeBind1(23, 20, "common.close") : \u0275\u0275pipeBind1(24, 22, "common.view"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("MY_SALES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("MY_SALES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailsSaleId() === s_r4.id);
  }
}
function MySalesPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.noData"), " ");
  }
}
function MySalesPage_ng_container_40_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function MySalesPage_ng_container_40_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const s_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit(s_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 53);
    \u0275\u0275element(2, "path", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "common.edit"), " ");
  }
}
function MySalesPage_ng_container_40_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function MySalesPage_ng_container_40_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const s_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(s_r9.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 53);
    \u0275\u0275element(2, "path", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "common.delete"), " ");
  }
}
function MySalesPage_ng_container_40_tr_24_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 71)(1, "td", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 72);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r12 = ctx.$implicit;
    const s_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r9.customer || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r12.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r12.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, l_r12.unitPrice));
  }
}
function MySalesPage_ng_container_40_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 62)(1, "td", 63)(2, "div", 38)(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 65)(8, "table", 66)(9, "thead", 67)(10, "tr")(11, "th", 68);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 68);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 69);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 69);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, MySalesPage_ng_container_40_tr_24_tr_24_Template, 10, 6, "tr", 70);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const s_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 7, "common.view"), " ", \u0275\u0275pipeBind1(6, 9, "common.details"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "common.seller"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "common.product"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 15, "common.qty"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 17, "common.price"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", s_r9.lines);
  }
}
function MySalesPage_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 47)(2, "td", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 50);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 51)(14, "cis-row-actions")(15, "button", 52);
    \u0275\u0275listener("click", function MySalesPage_ng_container_40_Template_button_click_15_listener() {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDetails(s_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 53);
    \u0275\u0275element(17, "path", 54)(18, "circle", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, MySalesPage_ng_container_40_button_22_Template, 5, 3, "button", 56)(23, MySalesPage_ng_container_40_button_23_Template, 5, 3, "button", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, MySalesPage_ng_container_40_tr_24_Template, 25, 19, "tr", 58);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r9.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r9.customer || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r9.referenceNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r9.lines.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, ctx_r1.saleTotalValue(s_r9)));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailsSaleId() === s_r9.id ? \u0275\u0275pipeBind1(20, 11, "common.close") : \u0275\u0275pipeBind1(21, 13, "common.view"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("MY_SALES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("MY_SALES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailsSaleId() === s_r9.id);
  }
}
function MySalesPage_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 47)(1, "td", 73);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.noData"));
  }
}
function MySalesPage_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75);
    \u0275\u0275listener("click", function MySalesPage_div_42_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteConfirm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 76)(3, "div", 77);
    \u0275\u0275listener("click", function MySalesPage_div_42_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 78);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 79);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 80)(12, "button", 81);
    \u0275\u0275listener("click", function MySalesPage_div_42_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteConfirm());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 82);
    \u0275\u0275listener("click", function MySalesPage_div_42_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 5, "common.delete"), " ", \u0275\u0275pipeBind1(7, 7, "nav.mySales"), "?");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "common.deleteConfirm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 11, "common.cancel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, "common.delete"), " ");
  }
}
function MySalesPage_div_43_div_49_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 47)(1, "td", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 72);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 50);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 51)(12, "button", 106);
    \u0275\u0275listener("click", function MySalesPage_div_43_div_49_tr_19_Template_button_click_12_listener() {
      const idx_r16 = \u0275\u0275restoreView(_r15).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeLine(idx_r16));
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r17.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r17.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, l_r17.unitPrice));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, ctx_r1.lineTotal(l_r17.quantity, l_r17.unitPrice)));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 9, "common.remove"));
  }
}
function MySalesPage_div_43_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 12)(2, "table", 13)(3, "thead", 14)(4, "tr")(5, "th", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 16);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 16);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 16);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "th", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, MySalesPage_div_43_div_49_tr_19_Template, 15, 11, "tr", 104);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 105);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementStart(23, "span", 96);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "money");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "common.product"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "common.qty"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "common.price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "common.total"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.lines());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 15, "common.grandTotal"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 17, ctx_r1.grandTotal()));
  }
}
function MySalesPage_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75);
    \u0275\u0275listener("click", function MySalesPage_div_43_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 76)(3, "div", 83);
    \u0275\u0275listener("click", function MySalesPage_div_43_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 0)(5, "div", 78);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 84);
    \u0275\u0275listener("click", function MySalesPage_div_43_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 85)(13, "div", 86)(14, "label", 87);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275element(17, "input", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 87);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275element(21, "input", 89);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 90)(23, "div", 42);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "form", 91);
    \u0275\u0275listener("ngSubmit", function MySalesPage_div_43_Template_form_ngSubmit_26_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addLine());
    });
    \u0275\u0275elementStart(27, "div", 86)(28, "label", 87);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275element(31, "input", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 87);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275element(35, "input", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "label", 87);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275element(39, "input", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 95);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementStart(43, "span", 96);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 97);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(49, MySalesPage_div_43_div_49_Template, 26, 19, "div", 98);
    \u0275\u0275elementStart(50, "div", 99)(51, "button", 100);
    \u0275\u0275listener("click", function MySalesPage_div_43_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreate());
    });
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 101);
    \u0275\u0275listener("click", function MySalesPage_div_43_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveSale());
    });
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.editingSaleId() ? \u0275\u0275pipeBind1(7, 18, "common.edit") : \u0275\u0275pipeBind1(8, 20, "common.create"), " ", \u0275\u0275pipeBind1(9, 22, "nav.mySales"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.headerForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 24, "common.seller"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 26, "common.reference"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 28, "common.addLine"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.lineForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 30, "common.productName"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 32, "common.qty"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 34, "common.unitPrice"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 36, "common.lineTotal"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 38, ctx_r1.currentLineTotal()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 40, "common.addLine"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.lines().length);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 42, "common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 44, "common.save"), " ");
  }
}
var MySalesPage = class _MySalesPage {
  perm = inject(PermissionService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  createOpen = signal(false, ...ngDevMode ? [{ debugName: "createOpen" }] : []);
  editingSaleId = signal(null, ...ngDevMode ? [{ debugName: "editingSaleId" }] : []);
  detailsSaleId = signal(null, ...ngDevMode ? [{ debugName: "detailsSaleId" }] : []);
  confirmDeleteOpen = signal(false, ...ngDevMode ? [{ debugName: "confirmDeleteOpen" }] : []);
  pendingDeleteSaleId = signal(null, ...ngDevMode ? [{ debugName: "pendingDeleteSaleId" }] : []);
  sales = signal([], ...ngDevMode ? [{ debugName: "sales" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  displayedSales = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.sales().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedSales" }] : []);
  fb = inject(FormBuilder);
  gql = inject(GraphqlService);
  headerForm = this.fb.group({
    customer: [""],
    referenceNumber: [""]
  });
  lineForm = this.fb.group({
    productName: ["", [Validators.required]],
    quantity: [1, [Validators.required, Validators.min(1)]],
    unitPrice: [0, [Validators.required, Validators.min(0)]]
  });
  lines = signal([], ...ngDevMode ? [{ debugName: "lines" }] : []);
  constructor() {
    this.perm.load();
    this.refresh();
  }
  openDeleteConfirm(id) {
    this.pendingDeleteSaleId.set(String(id));
    this.confirmDeleteOpen.set(true);
  }
  cancelDeleteConfirm() {
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteSaleId.set(null);
  }
  confirmDelete() {
    const id = this.pendingDeleteSaleId();
    if (!id)
      return;
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteSaleId.set(null);
    this.deleteSale(id);
  }
  toggleDetails(s) {
    const id = String(s.id);
    this.detailsSaleId.set(this.detailsSaleId() === id ? null : id);
  }
  openCreate() {
    this.error.set(null);
    this.editingSaleId.set(null);
    this.headerForm.reset({ customer: "", referenceNumber: "" });
    this.lineForm.reset({ productName: "", quantity: 1, unitPrice: 0 });
    this.lines.set([]);
    this.createOpen.set(true);
  }
  openEdit(s) {
    this.error.set(null);
    this.editingSaleId.set(String(s.id));
    this.headerForm.reset({
      customer: s.customer ?? "",
      referenceNumber: s.referenceNumber ?? ""
    });
    this.lineForm.reset({ productName: "", quantity: 1, unitPrice: 0 });
    this.lines.set((s.lines ?? []).map((l) => ({
      productName: String(l.productName ?? ""),
      quantity: Number(l.quantity ?? 0),
      unitPrice: Number(l.unitPrice ?? 0)
    })));
    this.createOpen.set(true);
  }
  closeCreate() {
    this.createOpen.set(false);
    this.editingSaleId.set(null);
  }
  refresh() {
    this.loading.set(true);
    this.error.set(null);
    const q = `query { mySales { id createdAt createdBy customer referenceNumber lines { id productName quantity unitPrice } } }`;
    this.gql.request(q).subscribe({
      next: (res) => {
        this.sales.set(res.mySales);
        this.loading.set(false);
      },
      error: (e) => {
        this.sales.set([]);
        this.error.set(e instanceof Error ? e.message : "Failed to load my sales");
        this.loading.set(false);
      }
    });
  }
  lineTotal(quantity, unitPrice) {
    const q = Number(quantity ?? 0);
    const p = Number(unitPrice ?? 0);
    if (!Number.isFinite(q) || !Number.isFinite(p))
      return 0;
    return q * p;
  }
  currentLineTotal = computed(() => {
    const raw = this.lineForm.getRawValue();
    return this.lineTotal(raw.quantity, raw.unitPrice);
  }, ...ngDevMode ? [{ debugName: "currentLineTotal" }] : []);
  grandTotal = computed(() => {
    return this.lines().reduce((sum, l) => sum + this.lineTotal(l.quantity, l.unitPrice), 0);
  }, ...ngDevMode ? [{ debugName: "grandTotal" }] : []);
  saleTotalValue(s) {
    return (s.lines ?? []).reduce((sum, l) => sum + Number(l.quantity ?? 0) * Number(l.unitPrice ?? 0), 0);
  }
  addLine() {
    this.lineForm.markAllAsTouched();
    if (this.lineForm.invalid)
      return;
    const raw = this.lineForm.getRawValue();
    const productName = String(raw.productName || "").trim();
    const quantity = Number(raw.quantity ?? 0);
    const unitPrice = Number(raw.unitPrice ?? 0);
    if (!productName) {
      this.error.set("Product name is required");
      return;
    }
    if (!Number.isFinite(quantity) || quantity <= 0) {
      this.error.set("Quantity must be greater than 0");
      return;
    }
    if (!Number.isFinite(unitPrice) || unitPrice < 0) {
      this.error.set("Unit price must be 0 or more");
      return;
    }
    this.error.set(null);
    this.lines.set([
      ...this.lines(),
      {
        productName,
        quantity,
        unitPrice
      }
    ]);
    this.lineForm.reset({ productName: "", quantity: 1, unitPrice: 0 });
  }
  removeLine(idx) {
    this.lines.set(this.lines().filter((_, i) => i !== idx));
  }
  saveSale() {
    if (!this.lines().length) {
      this.error.set("Add at least one line");
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    const header = this.headerForm.getRawValue();
    const editingId = this.editingSaleId();
    if (editingId) {
      const mutation2 = `mutation UpdateMySale($input: UpdateMySaleInput!) {
        updateMySale(input: $input) {
          id createdAt createdBy customer referenceNumber
          lines { id productName quantity unitPrice }
        }
      }`;
      this.gql.request(mutation2, {
        input: {
          id: editingId,
          customer: header.customer?.trim() ? String(header.customer).trim() : null,
          referenceNumber: header.referenceNumber?.trim() ? String(header.referenceNumber).trim() : null,
          lines: this.lines()
        }
      }).subscribe({
        next: () => {
          this.refresh();
          this.createOpen.set(false);
          this.editingSaleId.set(null);
        },
        error: (e) => {
          this.error.set(e instanceof Error ? e.message : "Failed to update my sale");
          this.loading.set(false);
        }
      });
      return;
    }
    const mutation = `mutation CreateMySale($input: CreateMySaleInput!) {
      createMySale(input: $input) {
        id createdAt createdBy customer referenceNumber
        lines { id productName quantity unitPrice }
      }
    }`;
    this.gql.request(mutation, {
      input: {
        customer: header.customer?.trim() ? String(header.customer).trim() : null,
        referenceNumber: header.referenceNumber?.trim() ? String(header.referenceNumber).trim() : null,
        lines: this.lines()
      }
    }).subscribe({
      next: () => {
        this.refresh();
        this.createOpen.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to save my sale");
        this.loading.set(false);
      }
    });
  }
  deleteSale(id) {
    this.loading.set(true);
    this.error.set(null);
    const mutation = `mutation DeleteMySale($input: DeleteMySaleInput!) { deleteMySale(input: $input) }`;
    this.gql.request(mutation, { input: { id } }).subscribe({
      next: () => {
        this.refresh();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to delete my sale");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function MySalesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MySalesPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MySalesPage, selectors: [["cis-my-sales-page"]], decls: 44, vars: 38, consts: [[1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "flex", "items-center", "gap-2"], ["routerLink", "/my-sales-report", 1, "rounded-xl", "bg-red-100", "dark:bg-red-900/30", "px-3", "py-2", "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-purple-200", "dark:hover:bg-purple-900/30"], ["class", "rounded-xl bg-pink-500 px-3 py-2 text-xs font-semibold text-white", "type", "button", 3, "click", 4, "ngIf"], ["class", "mt-4 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-4", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-3", "grid", "gap-3", "md:hidden"], ["class", "rounded-2xl bg-white dark:bg-slate-700 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-600", 4, "ngFor", "ngForOf"], ["class", "rounded-2xl bg-slate-50 dark:bg-slate-700/50 p-6 text-center text-sm text-slate-600 dark:text-slate-400 ring-1 ring-slate-100 dark:ring-slate-600", 4, "ngIf"], [1, "hidden", "md:block"], [1, "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [4, "ngFor", "ngForOf"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngIf"], ["class", "cis-modal-overlay fixed inset-0 z-50", 4, "ngIf"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-3", "py-2", "text-xs", "font-semibold", "text-white", 3, "click"], [1, "mt-4", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-700", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-600"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "min-w-0"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "mt-1", "truncate", "text-sm", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-1", "text-xs", "text-slate-600", "dark:text-slate-400"], [1, "text-right"], [1, "text-sm", "font-extrabold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "flex", "flex-wrap", "justify-end", "gap-2"], ["type", "button", 1, "rounded-lg", "bg-purple-700", "px-3", "py-2", "text-xs", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click"], ["class", "rounded-lg bg-pink-500 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70", "type", "button", 3, "click", 4, "ngIf"], ["class", "rounded-lg bg-[#B81104] px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70", "type", "button", 3, "click", 4, "ngIf"], ["class", "mt-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 p-3 ring-1 ring-slate-50 dark:ring-slate-600", 4, "ngIf"], ["type", "button", 1, "rounded-lg", "bg-pink-500", "px-3", "py-2", "text-xs", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click"], ["type", "button", 1, "rounded-lg", "bg-[#B81104]", "px-3", "py-2", "text-xs", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click"], [1, "mt-3", "rounded-xl", "bg-purple-100", "dark:bg-purple-900/30", "p-3", "ring-1", "ring-slate-50", "dark:ring-slate-600"], [1, "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-300"], [1, "mt-2", "grid", "gap-2"], ["class", "rounded-xl bg-white dark:bg-slate-800 p-3 ring-1 ring-slate-100 dark:ring-slate-600", 4, "ngFor", "ngForOf"], [1, "rounded-xl", "bg-white", "dark:bg-slate-800", "p-3", "ring-1", "ring-slate-100", "dark:ring-slate-600"], [1, "text-sm", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-1", "grid", "grid-cols-2", "gap-2", "text-xs", "text-slate-600", "dark:text-slate-400"], [1, "text-slate-500", "dark:text-slate-500"], [1, "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "rounded-2xl", "bg-slate-50", "dark:bg-slate-700/50", "p-6", "text-center", "text-sm", "text-slate-600", "dark:text-slate-400", "ring-1", "ring-slate-100", "dark:ring-slate-600"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "text-xs", "text-slate-600", "dark:text-slate-400"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right"], ["type", "button", 1, "cis-row-action", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["class", "cis-row-action", "type", "button", 3, "click", 4, "ngIf"], ["class", "cis-row-action cis-row-action-danger", "type", "button", 3, "click", 4, "ngIf"], ["class", "border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/50", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["type", "button", 1, "cis-row-action", "cis-row-action-danger", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "border-t", "border-slate-100", "dark:border-slate-700", "bg-slate-50/50", "dark:bg-slate-700/50"], ["colspan", "6", 1, "px-3", "py-3"], [1, "inline-flex", "items-center", "rounded-full", "bg-pink-50", "dark:bg-pink-900/30", "px-2.5", "py-1", "text-[11px]", "font-semibold", "text-pink-700", "dark:text-indigo-400", "ring-1", "ring-inset", "ring-pink-200", "dark:ring-pink-700"], [1, "mt-2", "overflow-auto", "rounded-xl", "bg-white", "dark:bg-slate-800", "ring-1", "ring-indigo-100", "dark:ring-pink-700", "border", "border-indigo-100", "dark:border-indigo-700"], [1, "w-full", "border-collapse", "text-xs"], [1, "bg-pink-50", "dark:bg-pink-900/30"], [1, "px-3", "py-2", "text-left", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-indigo-100 dark:border-indigo-700", 4, "ngFor", "ngForOf"], [1, "border-t", "border-indigo-100", "dark:border-indigo-700"], [1, "px-3", "py-2", "text-right", "text-slate-900", "dark:text-slate-300"], ["colspan", "6", 1, "px-3", "py-6", "text-center", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "cis-modal-overlay", "fixed", "inset-0", "z-50"], [1, "absolute", "inset-0", "bg-slate-900/40", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-sm", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-2", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "mt-5", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-[#B81104]", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-[#7f0c03]", 3, "click"], [1, "w-full", "max-w-2xl", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], [1, "mt-4", "grid", "gap-3", 3, "formGroup"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], ["formControlName", "customer", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["formControlName", "referenceNumber", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], [1, "mt-4", "rounded-xl", "bg-slate-50", "dark:bg-slate-700/50", "p-3", "ring-1", "ring-slate-100", "dark:ring-slate-600"], [1, "mt-3", "grid", "gap-3", 3, "ngSubmit", "formGroup"], ["formControlName", "productName", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["type", "number", "formControlName", "quantity", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["type", "number", "step", "0.01", "formControlName", "unitPrice", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], [1, "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-400"], [1, "text-slate-900", "dark:text-slate-100"], ["type", "submit", 1, "w-28", "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white"], ["class", "mt-4", 4, "ngIf"], [1, "mt-4", "flex", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-pink-600", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "mt-4"], [1, "px-3", "py-2"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], [1, "mt-2", "text-right", "text-sm", "font-semibold", "text-slate-700", "dark:text-slate-300"], ["type", "button", 1, "text-xs", "font-semibold", "text-[#B81104]", "dark:text-red-400", 3, "click"]], template: function MySalesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "a", 3);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, MySalesPage_button_9_Template, 4, 6, "button", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, MySalesPage_div_10_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(11, "div", 6)(12, "cis-pager", 7);
      \u0275\u0275twoWayListener("pageSizeChange", function MySalesPage_Template_cis_pager_pageSizeChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      })("pageIndexChange", function MySalesPage_Template_cis_pager_pageIndexChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8);
      \u0275\u0275template(14, MySalesPage_div_14_Template, 28, 24, "div", 9)(15, MySalesPage_div_15_Template, 3, 3, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "table", 13)(19, "thead", 14)(20, "tr")(21, "th", 15);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 15);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th", 15);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 16);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 16);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 16);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "tbody");
      \u0275\u0275template(40, MySalesPage_ng_container_40_Template, 25, 15, "ng-container", 17)(41, MySalesPage_tr_41_Template, 4, 3, "tr", 18);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(42, MySalesPage_div_42_Template, 18, 15, "div", 19)(43, MySalesPage_div_43_Template, 57, 46, "div", 19);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 20, "nav.mySales"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(7, 22, "nav.mySales"), " ", \u0275\u0275pipeBind1(8, 24, "common.view"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.perm.canCreate("MY_SALES"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(2);
      \u0275\u0275property("total", ctx.sales().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.displayedSales());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.sales().length);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 26, "common.date"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 28, "common.seller"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 30, "common.reference"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 32, "common.lines"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 34, "common.total"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 36, "common.actions"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedSales());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.sales().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.confirmDeleteOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.createOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, RowActionsMenuComponent, PagerComponent, MoneyPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MySalesPage, [{
    type: Component,
    args: [{ selector: "cis-my-sales-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, MoneyPipe, TranslatePipe, RowActionsMenuComponent, PagerComponent], template: `<div class="flex items-center justify-between">\r
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">{{ 'nav.mySales' | translate }}</h2>\r
  <div class="flex items-center gap-2">\r
    <a class="rounded-xl bg-red-100 dark:bg-red-900/30 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-purple-200 dark:hover:bg-purple-900/30"\r
      routerLink="/my-sales-report">\r
      {{ 'nav.mySales' | translate }} {{ 'common.view' | translate }}\r
    </a>\r
    <button *ngIf="perm.canCreate('MY_SALES')" class="rounded-xl bg-pink-500 px-3 py-2 text-xs font-semibold text-white" type="button"\r
      (click)="openCreate()">\r
      {{ 'common.create' | translate }} {{ 'nav.mySales' | translate }}\r
    </button>\r
  </div>\r
</div>\r
\r
<div class="mt-4 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
\r
<div class="mt-4 rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
  <cis-pager class="block" [total]="sales().length" [(pageSize)]="pageSize" [(pageIndex)]="pageIndex" />\r
\r
  <div class="mt-3 grid gap-3 md:hidden">\r
    <div *ngFor="let s of displayedSales()" class="rounded-2xl bg-white dark:bg-slate-700 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-600">\r
      <div class="flex items-start justify-between gap-3">\r
        <div class="min-w-0">\r
          <div class="text-xs text-slate-500 dark:text-slate-400">{{ s.createdAt }}</div>\r
          <div class="mt-1 truncate text-sm font-semibold text-slate-900 dark:text-slate-100">{{ s.customer || '-' }}</div>\r
          <div class="mt-1 text-xs text-slate-600 dark:text-slate-400">{{ 'common.reference' | translate }}: {{ s.referenceNumber || '-' }}</div>\r
        </div>\r
\r
        <div class="text-right">\r
          <div class="text-xs text-slate-500 dark:text-slate-400">{{ 'common.total' | translate }}</div>\r
          <div class="text-sm font-extrabold text-slate-900 dark:text-slate-100">{{ saleTotalValue(s) | money}}</div>\r
          <div class="mt-1 text-xs text-slate-600 dark:text-slate-400">{{ s.lines.length }} {{ 'common.lines' | translate }}</div>\r
        </div>\r
      </div>\r
\r
      <div class="mt-3 flex flex-wrap justify-end gap-2">\r
        <button\r
          class="rounded-lg bg-purple-700 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
          type="button"\r
          (click)="toggleDetails(s)"\r
        >\r
          {{ detailsSaleId() === s.id ? ('common.close' | translate) : ('common.view' | translate) }}\r
        </button>\r
\r
        <button\r
          *ngIf="perm.canEdit('MY_SALES')"\r
          class="rounded-lg bg-pink-500 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
          type="button"\r
          (click)="openEdit(s)"\r
        >\r
          {{ 'common.edit' | translate }}\r
        </button>\r
\r
        <button\r
          *ngIf="perm.canDelete('MY_SALES')"\r
          class="rounded-lg bg-[#B81104] px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
          type="button"\r
          (click)="openDeleteConfirm(s.id)"\r
        >\r
          {{ 'common.delete' | translate }}\r
        </button>\r
      </div>\r
\r
      <div *ngIf="detailsSaleId() === s.id" class="mt-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 p-3 ring-1 ring-slate-50 dark:ring-slate-600">\r
        <div class="text-xs font-semibold text-slate-700 dark:text-slate-300">{{ 'common.view' | translate }} {{ 'common.details' | translate }}</div>\r
        <div class="mt-2 grid gap-2">\r
          <div *ngFor="let l of s.lines" class="rounded-xl bg-white dark:bg-slate-800 p-3 ring-1 ring-slate-100 dark:ring-slate-600">\r
            <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ l.productName }}</div>\r
            <div class="mt-1 grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">\r
              <div>\r
                <div class="text-slate-500 dark:text-slate-500">{{ 'common.seller' | translate }}</div>\r
                <div class="font-semibold text-slate-900 dark:text-slate-100">{{ s.customer || '-' }}</div>\r
              </div>\r
              <div class="text-right">\r
                <div class="text-slate-500 dark:text-slate-500">{{ 'common.qty' | translate }}</div>\r
                <div class="font-semibold text-slate-900 dark:text-slate-100">{{ l.quantity }}</div>\r
              </div>\r
              <div>\r
                <div class="text-slate-500 dark:text-slate-500">{{ 'common.price' | translate }}</div>\r
                <div class="font-semibold text-slate-900 dark:text-slate-100">{{ l.unitPrice | money}}</div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="!sales().length" class="rounded-2xl bg-slate-50 dark:bg-slate-700/50 p-6 text-center text-sm text-slate-600 dark:text-slate-400 ring-1 ring-slate-100 dark:ring-slate-600">\r
      {{ 'common.noData' | translate }}\r
    </div>\r
  </div>\r
\r
  <div class="hidden md:block">\r
    <div class="overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
      <table class="w-full border-collapse text-sm">\r
        <thead class="bg-slate-50 dark:bg-slate-700">\r
          <tr>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.date' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.seller' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.reference' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.lines' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.total' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <ng-container *ngFor="let s of displayedSales()">\r
            <tr class="border-t border-slate-100 dark:border-slate-700">\r
              <td class="px-3 py-2 text-xs text-slate-600 dark:text-slate-400">{{ s.createdAt }}</td>\r
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ s.customer || '-' }}</td>\r
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ s.referenceNumber || '-' }}</td>\r
              <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ s.lines.length }}</td>\r
              <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ saleTotalValue(s) | money}}</td>\r
              <td class="px-3 py-2 text-right">\r
                <cis-row-actions>\r
\r
                  <button\r
                    class="cis-row-action"\r
                    type="button" (click)="toggleDetails(s)">\r
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>\r
                    {{ detailsSaleId() === s.id ? ('common.close' | translate) : ('common.view' | translate) }}\r
                  </button>\r
\r
                  <button\r
                    *ngIf="perm.canEdit('MY_SALES')"\r
                    class="cis-row-action"\r
                    type="button" (click)="openEdit(s)">\r
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>\r
                    {{ 'common.edit' | translate }}\r
                  </button>\r
\r
                  <button\r
                    *ngIf="perm.canDelete('MY_SALES')"\r
                    class="cis-row-action cis-row-action-danger"\r
                    type="button" (click)="openDeleteConfirm(s.id)">\r
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>\r
                    {{ 'common.delete' | translate }}\r
                  </button>\r
\r
                </cis-row-actions>\r
              </td>\r
\r
            </tr>\r
\r
            <tr *ngIf="detailsSaleId() === s.id" class="border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/50">\r
              <td class="px-3 py-3" colspan="6">\r
                <div class="text-xs font-semibold text-slate-700 dark:text-slate-300">\r
                  <span class="inline-flex items-center rounded-full bg-pink-50 dark:bg-pink-900/30 px-2.5 py-1 text-[11px] font-semibold text-pink-700 dark:text-indigo-400 ring-1 ring-inset ring-pink-200 dark:ring-pink-700">{{ 'common.view' | translate }} {{ 'common.details' | translate }}</span>\r
                </div>\r
                <div class="mt-2 overflow-auto rounded-xl bg-white dark:bg-slate-800 ring-1 ring-indigo-100 dark:ring-pink-700 border border-indigo-100 dark:border-indigo-700">\r
                  <table class="w-full border-collapse text-xs">\r
                    <thead class="bg-pink-50 dark:bg-pink-900/30">\r
                      <tr>\r
                        <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.seller' | translate }}</th>\r
                        <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>\r
                        <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.qty' | translate }}</th>\r
                        <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.price' | translate }}</th>\r
                      </tr>\r
                    </thead>\r
                    <tbody>\r
                      <tr *ngFor="let l of s.lines" class="border-t border-indigo-100 dark:border-indigo-700">\r
                        <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ s.customer || '-' }}</td>\r
                        <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ l.productName }}</td>\r
                        <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ l.quantity }}</td>\r
                        <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ l.unitPrice | money}}</td>\r
                      </tr>\r
                    </tbody>\r
                  </table>\r
                </div>\r
              </td>\r
            </tr>\r
          </ng-container>\r
          <tr *ngIf="!sales().length" class="border-t border-slate-100 dark:border-slate-700">\r
            <td class="px-3 py-6 text-center text-sm text-slate-600 dark:text-slate-400" colspan="6">{{ 'common.noData' | translate }}</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
\r
<div *ngIf="confirmDeleteOpen()" class="cis-modal-overlay fixed inset-0 z-50">\r
  <div class="absolute inset-0 bg-slate-900/40" (click)="cancelDeleteConfirm()"></div>\r
  <div class="absolute inset-0 flex items-center justify-center p-4">\r
    <div\r
      class="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.delete' | translate }} {{ 'nav.mySales' | translate }}?</div>\r
      <div class="mt-2 text-sm text-slate-600 dark:text-slate-400">\r
        {{ 'common.deleteConfirm' | translate }}\r
      </div>\r
\r
      <div class="mt-5 flex items-center justify-end gap-2">\r
        <button\r
          type="button"\r
          class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"\r
          (click)="cancelDeleteConfirm()"\r
        >\r
          {{ 'common.cancel' | translate }}\r
        </button>\r
        <button\r
          type="button"\r
          class="rounded-xl bg-[#B81104] px-4 py-2 text-sm font-semibold text-white hover:bg-[#7f0c03]"\r
          (click)="confirmDelete()"\r
        >\r
          {{ 'common.delete' | translate }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div *ngIf="createOpen()" class="cis-modal-overlay fixed inset-0 z-50">\r
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeCreate()"></div>\r
  <div class="absolute inset-0 flex items-center justify-center p-4">\r
    <div class="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700"\r
      (click)="$event.stopPropagation()">\r
      <div class="flex items-center justify-between">\r
        <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ editingSaleId() ? ('common.edit' | translate) : ('common.create' | translate) }} {{ 'nav.mySales' | translate }}\r
        </div>\r
        <button class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200" type="button"\r
          (click)="closeCreate()">\u2715</button>\r
      </div>\r
\r
      <div class="mt-4 grid gap-3" [formGroup]="headerForm">\r
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
          <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
            {{ 'common.seller' | translate }}\r
            <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="customer" />\r
          </label>\r
          <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
            {{ 'common.reference' | translate }}\r
            <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="referenceNumber" />\r
          </label>\r
        </div>\r
      </div>\r
\r
      <div class="mt-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3 ring-1 ring-slate-100 dark:ring-slate-600">\r
        <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ 'common.addLine' | translate }}</div>\r
        <form class="mt-3 grid gap-3" [formGroup]="lineForm" (ngSubmit)="addLine()">\r
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
            <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
              {{ 'common.productName' | translate }}\r
              <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="productName" />\r
            </label>\r
            <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
              {{ 'common.qty' | translate }}\r
              <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="number"\r
                formControlName="quantity" />\r
            </label>\r
            <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
              {{ 'common.unitPrice' | translate }}\r
              <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="number" step="0.01"\r
                formControlName="unitPrice" />\r
            </label>\r
          </div>\r
\r
          <div class="text-right text-xs font-semibold text-slate-600 dark:text-slate-400">\r
            {{ 'common.lineTotal' | translate }}: <span class="text-slate-900 dark:text-slate-100">{{ currentLineTotal() | money}}</span>\r
          </div>\r
\r
          <button class="w-28 rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white" type="submit">\r
            {{ 'common.addLine' | translate }}\r
          </button>\r
        </form>\r
      </div>\r
\r
      <div class="mt-4" *ngIf="lines().length">\r
        <div class="overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
          <table class="w-full border-collapse text-sm">\r
            <thead class="bg-slate-50 dark:bg-slate-700">\r
              <tr>\r
                <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>\r
                <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.qty' | translate }}</th>\r
                <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.price' | translate }}</th>\r
                <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.total' | translate }}</th>\r
                <th class="px-3 py-2"></th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let l of lines(); let idx = index" class="border-t border-slate-100 dark:border-slate-700">\r
                <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ l.productName }}</td>\r
                <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ l.quantity }}</td>\r
                <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ l.unitPrice | money}}</td>\r
                <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ lineTotal(l.quantity, l.unitPrice) | money}}</td>\r
                <td class="px-3 py-2 text-right">\r
                  <button class="text-xs font-semibold text-[#B81104] dark:text-red-400" type="button"\r
                    (click)="removeLine(idx)">{{ 'common.remove' | translate }}</button>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <div class="mt-2 text-right text-sm font-semibold text-slate-700 dark:text-slate-300">\r
          {{ 'common.grandTotal' | translate }}: <span class="text-slate-900 dark:text-slate-100">{{ grandTotal() | money}}</span>\r
        </div>\r
      </div>\r
\r
      <div class="mt-4 flex justify-end gap-2">\r
        <button\r
          class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70"\r
          type="button" (click)="closeCreate()" [disabled]="loading()">\r
          {{ 'common.cancel' | translate }}\r
        </button>\r
        <button\r
          class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-70"\r
          type="button" (click)="saveSale()" [disabled]="loading()">\r
          {{ 'common.save' | translate }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MySalesPage, { className: "MySalesPage", filePath: "app/features/my-sales/my-sales.page.ts", lineNumber: 41 });
})();

// src/app/features/my-sales-report/my-sales-report.page.ts
function MySalesReportPage_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 29)(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.customer || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.referenceNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.lines.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 5, ctx_r1.saleTotalValue(s_r1)));
  }
}
function MySalesReportPage_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 29)(1, "td", 33);
    \u0275\u0275text(2, "No sales for selected day");
    \u0275\u0275elementEnd()();
  }
}
function MySalesReportPage_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.customer || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.referenceNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.lines.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 5, ctx_r1.saleTotalValue(s_r3)));
  }
}
function MySalesReportPage_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 33);
    \u0275\u0275text(2, "No sales for selected month");
    \u0275\u0275elementEnd()();
  }
}
var MySalesReportPage = class _MySalesReportPage {
  sales = signal([], ...ngDevMode ? [{ debugName: "sales" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  selectedDate = signal((/* @__PURE__ */ new Date()).toISOString().slice(0, 10), ...ngDevMode ? [{ debugName: "selectedDate" }] : []);
  selectedMonth = signal((/* @__PURE__ */ new Date()).toISOString().slice(0, 7), ...ngDevMode ? [{ debugName: "selectedMonth" }] : []);
  fb = inject(FormBuilder);
  gql = inject(GraphqlService);
  destroyRef = inject(DestroyRef);
  form = this.fb.group({
    date: [(/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [Validators.required]],
    month: [(/* @__PURE__ */ new Date()).toISOString().slice(0, 7), [Validators.required]]
  });
  constructor() {
    this.form.controls.date.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((v) => {
      const next = String(v || "").trim();
      if (next)
        this.selectedDate.set(next);
    });
    this.form.controls.month.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((v) => {
      const next = String(v || "").trim();
      if (next)
        this.selectedMonth.set(next);
    });
    this.refresh();
  }
  refresh() {
    this.loading.set(true);
    this.error.set(null);
    const q = `query { mySales { id createdAt createdBy customer referenceNumber lines { id productName quantity unitPrice } } }`;
    this.gql.request(q).subscribe({
      next: (res) => {
        this.sales.set(res.mySales);
        this.loading.set(false);
      },
      error: (e) => {
        this.sales.set([]);
        this.error.set(e instanceof Error ? e.message : "Failed to load my sales");
        this.loading.set(false);
      }
    });
  }
  isSameDay(iso, ymd) {
    return String(iso || "").slice(0, 10) === ymd;
  }
  isSameMonth(iso, ym) {
    return String(iso || "").slice(0, 7) === ym;
  }
  dailySales = computed(() => {
    const date = this.selectedDate();
    if (!date)
      return [];
    return this.sales().filter((s) => this.isSameDay(s.createdAt, date));
  }, ...ngDevMode ? [{ debugName: "dailySales" }] : []);
  dailyPageSize = signal(10, ...ngDevMode ? [{ debugName: "dailyPageSize" }] : []);
  dailyPageIndex = signal(0, ...ngDevMode ? [{ debugName: "dailyPageIndex" }] : []);
  displayedDaily = computed(() => {
    const size = this.dailyPageSize();
    const start = this.dailyPageIndex() * size;
    return this.dailySales().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedDaily" }] : []);
  monthlySales = computed(() => {
    const month = this.selectedMonth();
    if (!month)
      return [];
    return this.sales().filter((s) => this.isSameMonth(s.createdAt, month));
  }, ...ngDevMode ? [{ debugName: "monthlySales" }] : []);
  monthlyPageSize = signal(10, ...ngDevMode ? [{ debugName: "monthlyPageSize" }] : []);
  monthlyPageIndex = signal(0, ...ngDevMode ? [{ debugName: "monthlyPageIndex" }] : []);
  displayedMonthly = computed(() => {
    const size = this.monthlyPageSize();
    const start = this.monthlyPageIndex() * size;
    return this.monthlySales().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedMonthly" }] : []);
  saleTotal(s) {
    return (s.lines ?? []).reduce((sum, l) => sum + Number(l.quantity ?? 0) * Number(l.unitPrice ?? 0), 0);
  }
  dailyTotal = computed(() => this.dailySales().reduce((sum, s) => sum + this.saleTotal(s), 0), ...ngDevMode ? [{ debugName: "dailyTotal" }] : []);
  monthlyTotal = computed(() => this.monthlySales().reduce((sum, s) => sum + this.saleTotal(s), 0), ...ngDevMode ? [{ debugName: "monthlyTotal" }] : []);
  saleTotalValue(s) {
    return this.saleTotal(s);
  }
  static \u0275fac = function MySalesReportPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MySalesReportPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MySalesReportPage, selectors: [["cis-my-sales-report-page"]], decls: 74, vars: 18, consts: [[1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], ["routerLink", "/my-sales", 1, "rounded-xl", "bg-purple-200", "dark:bg-purple-900/30", "px-3", "py-2", "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-red-100", "dark:hover:bg-red-900/30"], [1, "mt-4", "grid", "grid-cols-1", "gap-4", "xl:grid-cols-1"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-indigo-100", "dark:ring-pink-700", "border", "border-indigo-100", "dark:border-indigo-700"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "inline-flex", "items-center", "rounded-full", "bg-pink-50", "dark:bg-pink-900/30", "px-2.5", "py-1", "text-xs", "font-semibold", "text-pink-700", "dark:text-indigo-400", "ring-1", "ring-inset", "ring-pink-200", "dark:ring-pink-700"], [1, "ml-2"], [1, "text-sm", "font-semibold", "text-slate-700", "dark:text-slate-300"], [1, "text-pink-700", "dark:text-indigo-400"], [1, "mt-3", "grid", "gap-3", "sm:grid-cols-[220px_auto]", "sm:items-end", 3, "formGroup"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], ["type", "date", "formControlName", "date", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-indigo-100", "dark:ring-pink-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-pink-50", "dark:bg-pink-900/30"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-indigo-100 dark:border-indigo-700", 4, "ngFor", "ngForOf"], ["class", "border-t border-indigo-100 dark:border-indigo-700", 4, "ngIf"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-emerald-100", "dark:ring-emerald-700", "border", "border-emerald-100", "dark:border-emerald-700"], [1, "inline-flex", "items-center", "rounded-full", "bg-[#FFFACD]", "dark:bg-yellow-900/30", "px-2.5", "py-1", "text-xs", "font-semibold", "text-pink-500", "dark:text-pink-400", "ring-1", "ring-inset", "ring-pink-500/25", "dark:ring-teal-700"], [1, "text-pink-500", "dark:text-pink-400"], ["type", "month", "formControlName", "month", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-emerald-100", "dark:ring-emerald-700"], [1, "bg-[#FFFACD]", "dark:bg-yellow-900/30"], ["class", "border-t border-emerald-100 dark:border-emerald-700", 4, "ngFor", "ngForOf"], ["class", "border-t border-emerald-100 dark:border-emerald-700", 4, "ngIf"], [1, "border-t", "border-indigo-100", "dark:border-indigo-700"], [1, "px-3", "py-2", "text-xs", "text-slate-600", "dark:text-slate-400"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"], ["colspan", "5", 1, "px-3", "py-6", "text-center", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "border-t", "border-emerald-100", "dark:border-emerald-700"]], template: function MySalesReportPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "My Sales Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 2);
      \u0275\u0275text(4, " Back to My Sales ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "section", 4)(7, "div", 0)(8, "h3", 5)(9, "span", 6);
      \u0275\u0275text(10, "Daily");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 7);
      \u0275\u0275text(12, "Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 8);
      \u0275\u0275text(14, " Total: ");
      \u0275\u0275elementStart(15, "span", 9);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "money");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "form", 10)(19, "label", 11);
      \u0275\u0275text(20, " Date ");
      \u0275\u0275element(21, "input", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "cis-pager", 13);
      \u0275\u0275twoWayListener("pageSizeChange", function MySalesReportPage_Template_cis_pager_pageSizeChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dailyPageSize, $event) || (ctx.dailyPageSize = $event);
        return $event;
      })("pageIndexChange", function MySalesReportPage_Template_cis_pager_pageIndexChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dailyPageIndex, $event) || (ctx.dailyPageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14)(24, "table", 15)(25, "thead", 16)(26, "tr")(27, "th", 17);
      \u0275\u0275text(28, "Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 17);
      \u0275\u0275text(30, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 17);
      \u0275\u0275text(32, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 18);
      \u0275\u0275text(34, "Lines");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th", 18);
      \u0275\u0275text(36, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "tbody");
      \u0275\u0275template(38, MySalesReportPage_tr_38_Template, 12, 7, "tr", 19)(39, MySalesReportPage_tr_39_Template, 3, 0, "tr", 20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "section", 21)(41, "div", 0)(42, "h3", 5)(43, "span", 22);
      \u0275\u0275text(44, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 7);
      \u0275\u0275text(46, "Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 8);
      \u0275\u0275text(48, " Total: ");
      \u0275\u0275elementStart(49, "span", 23);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "money");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "form", 10)(53, "label", 11);
      \u0275\u0275text(54, " Month ");
      \u0275\u0275element(55, "input", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "cis-pager", 13);
      \u0275\u0275twoWayListener("pageSizeChange", function MySalesReportPage_Template_cis_pager_pageSizeChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.monthlyPageSize, $event) || (ctx.monthlyPageSize = $event);
        return $event;
      })("pageIndexChange", function MySalesReportPage_Template_cis_pager_pageIndexChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.monthlyPageIndex, $event) || (ctx.monthlyPageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 25)(58, "table", 15)(59, "thead", 26)(60, "tr")(61, "th", 17);
      \u0275\u0275text(62, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 17);
      \u0275\u0275text(64, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 17);
      \u0275\u0275text(66, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 18);
      \u0275\u0275text(68, "Lines");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th", 18);
      \u0275\u0275text(70, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "tbody");
      \u0275\u0275template(72, MySalesReportPage_tr_72_Template, 12, 7, "tr", 27)(73, MySalesReportPage_tr_73_Template, 3, 0, "tr", 28);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, ctx.dailyTotal()));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275property("total", ctx.dailySales().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.dailyPageSize)("pageIndex", ctx.dailyPageIndex);
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.displayedDaily());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.dailySales().length);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 16, ctx.monthlyTotal()));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275property("total", ctx.monthlySales().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.monthlyPageSize)("pageIndex", ctx.monthlyPageIndex);
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.displayedMonthly());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.monthlySales().length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, PagerComponent, MoneyPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MySalesReportPage, [{
    type: Component,
    args: [{ selector: "cis-my-sales-report-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, MoneyPipe, TranslatePipe, PagerComponent], template: `<div class="flex items-center justify-between">\r
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">My Sales Report</h2>\r
  <a class="rounded-xl bg-purple-200 dark:bg-purple-900/30 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-red-100 dark:hover:bg-red-900/30" routerLink="/my-sales">\r
    Back to My Sales\r
  </a>\r
</div>\r
\r
<div class="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-1">\r
\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-indigo-100 dark:ring-pink-700 border border-indigo-100 dark:border-indigo-700">\r
    <div class="flex items-center justify-between">\r
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">\r
        <span class="inline-flex items-center rounded-full bg-pink-50 dark:bg-pink-900/30 px-2.5 py-1 text-xs font-semibold text-pink-700 dark:text-indigo-400 ring-1 ring-inset ring-pink-200 dark:ring-pink-700">Daily</span>\r
        <span class="ml-2">Report</span>\r
      </h3>\r
      <div class="text-sm font-semibold text-slate-700 dark:text-slate-300">\r
        Total:\r
        <span class="text-pink-700 dark:text-indigo-400">{{ dailyTotal() | money}}</span>\r
      </div>\r
    </div>\r
\r
    <form class="mt-3 grid gap-3 sm:grid-cols-[220px_auto] sm:items-end" [formGroup]="form">\r
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
        Date\r
        <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="date" formControlName="date" />\r
      </label>\r
    </form>\r
\r
    <cis-pager class="mt-3 block" [total]="dailySales().length" [(pageSize)]="dailyPageSize" [(pageIndex)]="dailyPageIndex" />\r
\r
    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-indigo-100 dark:ring-pink-700">\r
      <table class="w-full border-collapse text-sm">\r
        <thead class="bg-pink-50 dark:bg-pink-900/30">\r
          <tr>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Time</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Customer</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Reference</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">Lines</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">Total</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let s of displayedDaily()" class="border-t border-indigo-100 dark:border-indigo-700">\r
            <td class="px-3 py-2 text-xs text-slate-600 dark:text-slate-400">{{ s.createdAt }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ s.customer || '-' }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ s.referenceNumber || '-' }}</td>\r
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ s.lines.length }}</td>\r
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ saleTotalValue(s) | money}}</td>\r
          </tr>\r
          <tr *ngIf="!dailySales().length" class="border-t border-indigo-100 dark:border-indigo-700">\r
            <td class="px-3 py-6 text-center text-sm text-slate-600 dark:text-slate-400" colspan="5">No sales for selected day</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </section>\r
\r
\r
\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-emerald-100 dark:ring-emerald-700 border border-emerald-100 dark:border-emerald-700">\r
    <div class="flex items-center justify-between">\r
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">\r
        <span class="inline-flex items-center rounded-full bg-[#FFFACD] dark:bg-yellow-900/30 px-2.5 py-1 text-xs font-semibold text-pink-500 dark:text-pink-400 ring-1 ring-inset ring-pink-500/25 dark:ring-teal-700">Monthly</span>\r
        <span class="ml-2">Report</span>\r
      </h3>\r
      <div class="text-sm font-semibold text-slate-700 dark:text-slate-300">\r
        Total:\r
        <span class="text-pink-500 dark:text-pink-400">{{ monthlyTotal() | money}}</span>\r
      </div>\r
    </div>\r
\r
    <form class="mt-3 grid gap-3 sm:grid-cols-[220px_auto] sm:items-end" [formGroup]="form">\r
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
        Month\r
        <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="month" formControlName="month" />\r
      </label>\r
    </form>\r
\r
    <cis-pager class="mt-3 block" [total]="monthlySales().length" [(pageSize)]="monthlyPageSize" [(pageIndex)]="monthlyPageIndex" />\r
\r
    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-emerald-100 dark:ring-emerald-700">\r
      <table class="w-full border-collapse text-sm">\r
        <thead class="bg-[#FFFACD] dark:bg-yellow-900/30">\r
          <tr>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Date</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Customer</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">Reference</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">Lines</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">Total</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let s of displayedMonthly()" class="border-t border-emerald-100 dark:border-emerald-700">\r
            <td class="px-3 py-2 text-xs text-slate-600 dark:text-slate-400">{{ s.createdAt }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ s.customer || '-' }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ s.referenceNumber || '-' }}</td>\r
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ s.lines.length }}</td>\r
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ saleTotalValue(s) | money}}</td>\r
          </tr>\r
          <tr *ngIf="!monthlySales().length" class="border-t border-emerald-100 dark:border-emerald-700">\r
            <td class="px-3 py-6 text-center text-sm text-slate-600 dark:text-slate-400" colspan="5">No sales for selected month</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </section>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MySalesReportPage, { className: "MySalesReportPage", filePath: "app/features/my-sales-report/my-sales-report.page.ts", lineNumber: 37 });
})();

// src/app/features/expiry-alerts/expiry-alerts.page.ts
function ExpiryAlertsPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ExpiryAlertsPage_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ExpiryAlertsPage_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.writeOff());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.writeOffBusy() || !ctx_r0.expiredCount());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.writeOffBusy() ? \u0275\u0275pipeBind1(2, 2, "common.writingOff") : \u0275\u0275pipeBind1(3, 4, "common.writeOffExpired"), " ");
  }
}
function ExpiryAlertsPage_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.writeOffMessage());
  }
}
function ExpiryAlertsPage_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 24)(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.batchNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.expiryDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.qtyOnHand);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-[#B81104]", a_r3.daysToExpiry < 0)("dark\\:text-red-400", a_r3.daysToExpiry < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r3.daysToExpiry);
  }
}
function ExpiryAlertsPage_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 24)(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.qtyOnHand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.threshold);
  }
}
var ExpiryAlertsPage = class _ExpiryAlertsPage {
  gql;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  writeOffBusy = signal(false, ...ngDevMode ? [{ debugName: "writeOffBusy" }] : []);
  writeOffMessage = signal(null, ...ngDevMode ? [{ debugName: "writeOffMessage" }] : []);
  expiry = signal([], ...ngDevMode ? [{ debugName: "expiry" }] : []);
  lowStock = signal([], ...ngDevMode ? [{ debugName: "lowStock" }] : []);
  expiredCount = computed(() => this.expiry().filter((a) => a.daysToExpiry < 0 && a.qtyOnHand > 0).length, ...ngDevMode ? [{ debugName: "expiredCount" }] : []);
  expiryPageSize = signal(10, ...ngDevMode ? [{ debugName: "expiryPageSize" }] : []);
  expiryPageIndex = signal(0, ...ngDevMode ? [{ debugName: "expiryPageIndex" }] : []);
  displayedExpiry = computed(() => {
    const size = this.expiryPageSize();
    const start = this.expiryPageIndex() * size;
    return this.expiry().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedExpiry" }] : []);
  lowStockPageSize = signal(10, ...ngDevMode ? [{ debugName: "lowStockPageSize" }] : []);
  lowStockPageIndex = signal(0, ...ngDevMode ? [{ debugName: "lowStockPageIndex" }] : []);
  displayedLowStock = computed(() => {
    const size = this.lowStockPageSize();
    const start = this.lowStockPageIndex() * size;
    return this.lowStock().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedLowStock" }] : []);
  fb = inject(FormBuilder);
  branchCtx = inject(BranchContext);
  perm = inject(PermissionService);
  form = this.fb.group({
    days: [30, [Validators.required]],
    threshold: [10, [Validators.required]]
  });
  constructor(gql) {
    this.gql = gql;
    this.perm.load();
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const { days, threshold } = this.form.getRawValue();
    const qExpiry = `query Expiry($days: Int!, $branch: String) { expiryAlerts(days: $days, branch: $branch) { productId sku productName batchId batchNumber expiryDate qtyOnHand daysToExpiry } }`;
    const qLow = `query Low($t: Int!, $branch: String) { lowStockAlerts(threshold: $t, branch: $branch) { productId sku productName qtyOnHand threshold } }`;
    this.gql.request(qExpiry, { days: Number(days ?? 30), branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        this.expiry.set(res.expiryAlerts);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load expiry alerts");
        this.loading.set(false);
      }
    });
    this.gql.request(qLow, { t: Number(threshold ?? 10), branch: this.branchCtx.effective() }).subscribe({
      next: (res) => this.lowStock.set(res.lowStockAlerts),
      error: () => {
      }
    });
  }
  writeOff() {
    if (this.writeOffBusy() || !this.expiredCount())
      return;
    this.writeOffBusy.set(true);
    this.writeOffMessage.set(null);
    this.error.set(null);
    this.gql.request("mutation WriteOff($branch: String) { writeOffExpired(branch: $branch) { id expiryDate qtyOnHand } }", { branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        this.writeOffBusy.set(false);
        this.writeOffMessage.set(`${(res.writeOffExpired ?? []).length} expired batch(es) written off.`);
        this.load();
      },
      error: (e) => {
        this.writeOffBusy.set(false);
        this.error.set(e instanceof Error ? e.message : "Failed to write off expired stock.");
      }
    });
  }
  static \u0275fac = function ExpiryAlertsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpiryAlertsPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpiryAlertsPage, selectors: [["cis-expiry-alerts-page"]], decls: 73, vars: 57, consts: [[1, "flex", "items-center"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-4", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "grid", "gap-3", "sm:grid-cols-[200px_200px_auto]", "sm:items-end", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], ["type", "number", "formControlName", "days", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["type", "number", "formControlName", "threshold", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-6", "grid", "grid-cols-1", "gap-4", "xl:grid-cols-2"], [1, "flex", "items-center", "justify-between"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], ["class", "rounded-xl bg-[#B81104] px-3 py-1.5 text-xs font-semibold text-white", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "mt-2 text-xs text-emerald-600 dark:text-emerald-400", 4, "ngIf"], [1, "mt-2", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-2", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], ["type", "button", 1, "rounded-xl", "bg-[#B81104]", "px-3", "py-1.5", "text-xs", "font-semibold", "text-white", 3, "click", "disabled"], [1, "mt-2", "text-xs", "text-emerald-600", "dark:text-emerald-400"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right"], [1, "px-3", "py-2", "text-right", "text-slate-900", "dark:text-slate-300"]], template: function ExpiryAlertsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Expiry & Alerts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "form", 3);
      \u0275\u0275listener("ngSubmit", function ExpiryAlertsPage_Template_form_ngSubmit_4_listener() {
        return ctx.load();
      });
      \u0275\u0275elementStart(5, "label", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275element(8, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "label", 4);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275element(12, "input", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, ExpiryAlertsPage_div_16_Template, 2, 1, "div", 8);
      \u0275\u0275elementStart(17, "div", 9)(18, "section")(19, "div", 10)(20, "h3", 11);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, ExpiryAlertsPage_button_23_Template, 4, 6, "button", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, ExpiryAlertsPage_div_24_Template, 2, 1, "div", 13);
      \u0275\u0275elementStart(25, "cis-pager", 14);
      \u0275\u0275twoWayListener("pageSizeChange", function ExpiryAlertsPage_Template_cis_pager_pageSizeChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.expiryPageSize, $event) || (ctx.expiryPageSize = $event);
        return $event;
      })("pageIndexChange", function ExpiryAlertsPage_Template_cis_pager_pageIndexChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.expiryPageIndex, $event) || (ctx.expiryPageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 15)(27, "table", 16)(28, "thead", 17)(29, "tr")(30, "th", 18);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 18);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 18);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 18);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th", 19);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th", 19);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "tbody");
      \u0275\u0275template(49, ExpiryAlertsPage_tr_49_Template, 13, 10, "tr", 20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "section")(51, "h3", 11);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "cis-pager", 14);
      \u0275\u0275twoWayListener("pageSizeChange", function ExpiryAlertsPage_Template_cis_pager_pageSizeChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.lowStockPageSize, $event) || (ctx.lowStockPageSize = $event);
        return $event;
      })("pageIndexChange", function ExpiryAlertsPage_Template_cis_pager_pageIndexChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.lowStockPageIndex, $event) || (ctx.lowStockPageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 15)(56, "table", 16)(57, "thead", 17)(58, "tr")(59, "th", 18);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 18);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 19);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 19);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "tbody");
      \u0275\u0275template(72, ExpiryAlertsPage_tr_72_Template, 9, 4, "tr", 20);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 27, "common.expiryAlertDays"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 29, "common.lowStockThreshold"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 31, "common.apply"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 33, "common.expiringExpiredStock"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.perm.canEdit("INVENTORY"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.writeOffMessage());
      \u0275\u0275advance();
      \u0275\u0275property("total", ctx.expiry().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.expiryPageSize)("pageIndex", ctx.expiryPageIndex);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 35, "common.sku"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 37, "common.product"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 39, "common.batch"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 41, "common.expiry"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 43, "common.qty"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 45, "common.days"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedExpiry());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 47, "common.lowStock"));
      \u0275\u0275advance(2);
      \u0275\u0275property("total", ctx.lowStock().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.lowStockPageSize)("pageIndex", ctx.lowStockPageIndex);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 49, "common.sku"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 51, "common.product"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 53, "common.qty"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 55, "common.threshold"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedLowStock());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, PagerComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpiryAlertsPage, [{
    type: Component,
    args: [{ selector: "cis-expiry-alerts-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslatePipe, PagerComponent], template: `<div class="flex items-center">\r
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Expiry & Alerts</h2>\r
</div>\r
\r
<div class="mt-4 rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
  <form class="grid gap-3 sm:grid-cols-[200px_200px_auto] sm:items-end" [formGroup]="form" (ngSubmit)="load()">\r
    <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
      {{ 'common.expiryAlertDays' | translate }}\r
      <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="number" formControlName="days" />\r
    </label>\r
\r
    <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
      {{ 'common.lowStockThreshold' | translate }}\r
      <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="number" formControlName="threshold" />\r
    </label>\r
\r
    <button class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white" type="submit">{{ 'common.apply' | translate }}</button>\r
  </form>\r
\r
  <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
\r
  <div class="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-2">\r
    <section>\r
      <div class="flex items-center justify-between">\r
        <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.expiringExpiredStock' | translate }}</h3>\r
        <button *ngIf="perm.canEdit('INVENTORY')" class="rounded-xl bg-[#B81104] px-3 py-1.5 text-xs font-semibold text-white" type="button" [disabled]="writeOffBusy() || !expiredCount()" (click)="writeOff()">\r
          {{ writeOffBusy() ? ('common.writingOff' | translate) : ('common.writeOffExpired' | translate) }}\r
        </button>\r
      </div>\r
      <div *ngIf="writeOffMessage()" class="mt-2 text-xs text-emerald-600 dark:text-emerald-400">{{ writeOffMessage() }}</div>\r
      <cis-pager class="mt-2 block" [total]="expiry().length" [(pageSize)]="expiryPageSize" [(pageIndex)]="expiryPageIndex" />\r
      <div class="mt-2 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
        <table class="w-full border-collapse text-sm">\r
          <thead class="bg-slate-50 dark:bg-slate-700">\r
            <tr>\r
              <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.sku' | translate }}</th>\r
              <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>\r
              <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.batch' | translate }}</th>\r
              <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.expiry' | translate }}</th>\r
              <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.qty' | translate }}</th>\r
              <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.days' | translate }}</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let a of displayedExpiry()" class="border-t border-slate-100 dark:border-slate-700">\r
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ a.sku }}</td>\r
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ a.productName }}</td>\r
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ a.batchNumber }}</td>\r
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ a.expiryDate }}</td>\r
              <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ a.qtyOnHand }}</td>\r
              <td class="px-3 py-2 text-right" [class.text-[#B81104]]="a.daysToExpiry < 0" [class.dark\\:text-red-400]="a.daysToExpiry < 0">{{ a.daysToExpiry }}</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </section>\r
\r
    <section>\r
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.lowStock' | translate }}</h3>\r
      <cis-pager class="mt-2 block" [total]="lowStock().length" [(pageSize)]="lowStockPageSize" [(pageIndex)]="lowStockPageIndex" />\r
      <div class="mt-2 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
        <table class="w-full border-collapse text-sm">\r
          <thead class="bg-slate-50 dark:bg-slate-700">\r
            <tr>\r
              <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.sku' | translate }}</th>\r
              <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>\r
              <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.qty' | translate }}</th>\r
              <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.threshold' | translate }}</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let a of displayedLowStock()" class="border-t border-slate-100 dark:border-slate-700">\r
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ a.sku }}</td>\r
              <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ a.productName }}</td>\r
              <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ a.qtyOnHand }}</td>\r
              <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ a.threshold }}</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </section>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: GraphqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpiryAlertsPage, { className: "ExpiryAlertsPage", filePath: "app/features/expiry-alerts/expiry-alerts.page.ts", lineNumber: 40 });
})();

// src/app/features/reports/reports.page.ts
function ReportsPage_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ReportsPage_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 31)(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 34);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 34);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 33);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.quantitySold);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, r_r2.salesAmount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, r_r2.costAmount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, r_r2.profitAmount));
  }
}
function ReportsPage_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ReportsPage_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 31)(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.batchNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.createdBy || "-");
  }
}
function ReportsPage_div_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 38)(7, "button", 39);
    \u0275\u0275listener("click", function ReportsPage_div_118_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.previousPage());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 39);
    \u0275\u0275listener("click", function ReportsPage_div_118_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate6(" ", \u0275\u0275pipeBind1(3, 10, "common.page"), " ", ctx_r0.currentPage(), " ", \u0275\u0275pipeBind1(4, 12, "common.of"), " ", ctx_r0.totalPages, " (", ctx_r0.allMovements().length, " ", \u0275\u0275pipeBind1(5, 14, "common.total"), ") ");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.currentPage() === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 16, "common.previous"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.totalPages);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 18, "common.next"), " ");
  }
}
var ReportsPage = class _ReportsPage {
  gql;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  valuation = signal(null, ...ngDevMode ? [{ debugName: "valuation" }] : []);
  allMovements = signal([], ...ngDevMode ? [{ debugName: "allMovements" }] : []);
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  dailySales = signal(null, ...ngDevMode ? [{ debugName: "dailySales" }] : []);
  dailyItemsPageSize = signal(10, ...ngDevMode ? [{ debugName: "dailyItemsPageSize" }] : []);
  dailyItemsPageIndex = signal(0, ...ngDevMode ? [{ debugName: "dailyItemsPageIndex" }] : []);
  displayedDailyItems = computed(() => {
    const size = this.dailyItemsPageSize();
    const start = this.dailyItemsPageIndex() * size;
    return (this.dailySales()?.items ?? []).slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedDailyItems" }] : []);
  fb = inject(FormBuilder);
  branchCtx = inject(BranchContext);
  auditForm = this.fb.group({
    type: [""],
    from: [""],
    to: [""]
  });
  dailySalesForm = this.fb.group({
    date: [(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)]
  });
  constructor(gql) {
    this.gql = gql;
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const qVal = `query Val($branch: String) { inventoryValuation(branch: $branch) { totalStockValue } }`;
    this.gql.request(qVal, { branch: this.branchCtx.effective() }).subscribe({
      next: (res) => this.valuation.set(res.inventoryValuation),
      error: () => {
      }
    });
    this.loadAudit();
    this.loadDailySales();
  }
  loadDailySales() {
    this.loading.set(true);
    this.error.set(null);
    const raw = this.dailySalesForm.getRawValue();
    const date = String(raw.date || "").trim();
    if (!date) {
      this.dailySales.set(null);
      this.loading.set(false);
      return;
    }
    const q = `query DailySales($date: String!, $branch: String) {
      dailySalesReport(date: $date, branch: $branch) {
        date
        totalSalesAmount
        totalCostAmount
        totalProfitAmount
        items { productId sku productName quantitySold salesAmount costAmount profitAmount }
      }
    }`;
    this.gql.request(q, { date, branch: this.branchCtx.effective() }).subscribe({
      next: (res) => {
        this.dailySales.set(res.dailySalesReport);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load daily sales report");
        this.loading.set(false);
      }
    });
  }
  loadAudit() {
    this.loading.set(true);
    this.error.set(null);
    const raw = this.auditForm.getRawValue();
    const q = `query Audit($filter: MovementAuditFilter) {
      movementAuditReport(filter: $filter) {
        id type quantity createdAt createdBy note sku productName batchNumber expiryDate
      }
    }`;
    this.gql.request(q, {
      filter: {
        type: raw.type || null,
        from: raw.from || null,
        to: raw.to || null
      }
    }).subscribe({
      next: (res) => {
        this.allMovements.set(res.movementAuditReport);
        this.currentPage.set(1);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load movement audit");
        this.loading.set(false);
      }
    });
  }
  get movements() {
    const start = (this.currentPage() - 1) * this.pageSize();
    const end = start + this.pageSize();
    return this.allMovements().slice(start, end);
  }
  get totalPages() {
    return Math.ceil(this.allMovements().length / this.pageSize());
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage.set(page);
    }
  }
  nextPage() {
    this.goToPage(this.currentPage() + 1);
  }
  previousPage() {
    this.goToPage(this.currentPage() - 1);
  }
  static \u0275fac = function ReportsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsPage, selectors: [["cis-reports-page"]], decls: 119, vars: 79, consts: [[1, "flex", "items-center"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-4", "grid", "grid-cols-1", "gap-4", "xl:grid-cols-[360px_1fr]"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "rounded-xl", "bg-slate-50", "dark:bg-slate-700/50", "p-4", "ring-1", "ring-slate-100", "dark:ring-slate-600"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "mt-1", "text-2xl", "font-extrabold", "text-slate-900", "dark:text-slate-100"], [1, "flex", "items-center", "justify-between"], [1, "rounded-xl", "bg-pink-500", "px-3", "py-2", "text-xs", "font-semibold", "text-white", 3, "click"], [1, "mt-3", "grid", "gap-3", "sm:grid-cols-[220px_auto]", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], ["type", "date", "formControlName", "date", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], [1, "grid", "grid-cols-3", "gap-3"], [1, "rounded-xl", "bg-slate-50", "dark:bg-slate-700/50", "p-3", "ring-1", "ring-slate-100", "dark:ring-slate-600"], [1, "mt-1", "text-lg", "font-extrabold", "text-slate-900", "dark:text-slate-100"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700", "xl:col-span-2"], [1, "mt-3", "grid", "gap-3", "sm:grid-cols-3", 3, "ngSubmit", "formGroup"], ["formControlName", "type", "placeholder", "IN/OUT/LOSS", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["formControlName", "from", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["formControlName", "to", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["class", "mt-3 flex items-center justify-between", 4, "ngIf"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "mt-3", "flex", "items-center", "justify-between"], [1, "text-xs", "text-slate-600", "dark:text-slate-400"], [1, "flex", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", "disabled:cursor-not-allowed", "disabled:opacity-50", 3, "click", "disabled"]], template: function ReportsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Reports");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "section", 3)(5, "h3", 4);
      \u0275\u0275text(6, "Inventory Valuation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
      \u0275\u0275text(9, "Total stock value (cost)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "money");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "section", 3)(14, "div", 8)(15, "h3", 4);
      \u0275\u0275text(16, "Daily Sales Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275listener("click", function ReportsPage_Template_button_click_17_listener() {
        return ctx.loadDailySales();
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "form", 10);
      \u0275\u0275listener("ngSubmit", function ReportsPage_Template_form_ngSubmit_20_listener() {
        return ctx.loadDailySales();
      });
      \u0275\u0275elementStart(21, "label", 11);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275element(24, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 13)(26, "div", 14)(27, "div", 6);
      \u0275\u0275text(28, "Total sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 15);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 14)(33, "div", 6);
      \u0275\u0275text(34, "Total profit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 15);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 14)(39, "div", 6);
      \u0275\u0275text(40, "Total cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 15);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "money");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(44, ReportsPage_div_44_Template, 2, 1, "div", 16);
      \u0275\u0275elementStart(45, "cis-pager", 17);
      \u0275\u0275twoWayListener("pageSizeChange", function ReportsPage_Template_cis_pager_pageSizeChange_45_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dailyItemsPageSize, $event) || (ctx.dailyItemsPageSize = $event);
        return $event;
      })("pageIndexChange", function ReportsPage_Template_cis_pager_pageIndexChange_45_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dailyItemsPageIndex, $event) || (ctx.dailyItemsPageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 18)(47, "table", 19)(48, "thead", 20)(49, "tr")(50, "th", 21);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 21);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 22);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 22);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 22);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 22);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "tbody");
      \u0275\u0275template(69, ReportsPage_tr_69_Template, 16, 12, "tr", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(70, "section", 24)(71, "div", 8)(72, "h3", 4);
      \u0275\u0275text(73, "Movement Audit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "button", 9);
      \u0275\u0275listener("click", function ReportsPage_Template_button_click_74_listener() {
        return ctx.loadAudit();
      });
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "form", 25);
      \u0275\u0275listener("ngSubmit", function ReportsPage_Template_form_ngSubmit_77_listener() {
        return ctx.loadAudit();
      });
      \u0275\u0275elementStart(78, "label", 11);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275element(81, "input", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "label", 11);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275element(85, "input", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "label", 11);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275element(89, "input", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(90, ReportsPage_div_90_Template, 2, 1, "div", 16);
      \u0275\u0275elementStart(91, "div", 18)(92, "table", 19)(93, "thead", 20)(94, "tr")(95, "th", 21);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 21);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 21);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th", 21);
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "th", 21);
      \u0275\u0275text(108);
      \u0275\u0275pipe(109, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 22);
      \u0275\u0275text(111);
      \u0275\u0275pipe(112, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "th", 21);
      \u0275\u0275text(114);
      \u0275\u0275pipe(115, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "tbody");
      \u0275\u0275template(117, ReportsPage_tr_117_Template, 15, 7, "tr", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(118, ReportsPage_div_118_Template, 13, 20, "div", 29);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_8_0;
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 33, ((tmp_0_0 = ctx.valuation()) == null ? null : tmp_0_0.totalStockValue) ?? 0), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 35, "common.apply"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.dailySalesForm);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 37, "common.date"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 39, ((tmp_4_0 = ctx.dailySales()) == null ? null : tmp_4_0.totalSalesAmount) ?? 0));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 41, ((tmp_5_0 = ctx.dailySales()) == null ? null : tmp_5_0.totalProfitAmount) ?? 0));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 43, ((tmp_6_0 = ctx.dailySales()) == null ? null : tmp_6_0.totalCostAmount) ?? 0));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("total", ((tmp_8_0 = ctx.dailySales()) == null ? null : tmp_8_0.items == null ? null : tmp_8_0.items.length) ?? 0);
      \u0275\u0275twoWayProperty("pageSize", ctx.dailyItemsPageSize)("pageIndex", ctx.dailyItemsPageIndex);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 45, "common.sku"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 47, "common.product"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 49, "common.qty"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 51, "common.sales"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 53, "common.cost"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 55, "common.profit"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedDailyItems());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 57, "common.apply"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.auditForm);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(80, 59, "common.type"), " (optional) ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(84, 61, "common.from"), " (Instant e.g. 2026-01-01T00:00:00Z) ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(88, 63, "common.to"), " (Instant e.g. 2026-12-31T23:59:59Z) ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 65, "common.date"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(100, 67, "common.type"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 69, "common.sku"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 71, "common.product"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 73, "common.batch"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(112, 75, "common.qty"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(115, 77, "common.by"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.movements);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages > 1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, PagerComponent, MoneyPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsPage, [{
    type: Component,
    args: [{ selector: "cis-reports-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, MoneyPipe, TranslatePipe, PagerComponent], template: `<div class="flex items-center">\r
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Reports</h2>\r
</div>\r
\r
<div class="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[360px_1fr]">\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">Inventory Valuation</h3>\r
    <div class="mt-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 p-4 ring-1 ring-slate-100 dark:ring-slate-600">\r
      <div class="text-xs text-slate-500 dark:text-slate-400">Total stock value (cost)</div>\r
      <div class="mt-1 text-2xl font-extrabold text-slate-900 dark:text-slate-100">\r
        {{ (valuation()?.totalStockValue ?? 0) | money }}\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="flex items-center justify-between">\r
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">Daily Sales Report</h3>\r
      <button class="rounded-xl bg-pink-500 px-3 py-2 text-xs font-semibold text-white" (click)="loadDailySales()">\r
        {{ 'common.apply' | translate }}\r
      </button>\r
    </div>\r
\r
    <form class="mt-3 grid gap-3 sm:grid-cols-[220px_auto]" [formGroup]="dailySalesForm" (ngSubmit)="loadDailySales()">\r
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
        {{ 'common.date' | translate }}\r
        <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="date" formControlName="date" />\r
      </label>\r
      <div class="grid grid-cols-3 gap-3">\r
        <div class="rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3 ring-1 ring-slate-100 dark:ring-slate-600">\r
          <div class="text-xs text-slate-500 dark:text-slate-400">Total sales</div>\r
          <div class="mt-1 text-lg font-extrabold text-slate-900 dark:text-slate-100">{{ (dailySales()?.totalSalesAmount ?? 0) | money }}</div>\r
        </div>\r
        <div class="rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3 ring-1 ring-slate-100 dark:ring-slate-600">\r
          <div class="text-xs text-slate-500 dark:text-slate-400">Total profit</div>\r
          <div class="mt-1 text-lg font-extrabold text-slate-900 dark:text-slate-100">{{ (dailySales()?.totalProfitAmount ?? 0) | money }}</div>\r
        </div>\r
        <div class="rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3 ring-1 ring-slate-100 dark:ring-slate-600">\r
          <div class="text-xs text-slate-500 dark:text-slate-400">Total cost</div>\r
          <div class="mt-1 text-lg font-extrabold text-slate-900 dark:text-slate-100">{{ (dailySales()?.totalCostAmount ?? 0) | money }}</div>\r
        </div>\r
      </div>\r
    </form>\r
\r
    <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
\r
    <cis-pager class="mt-3 block" [total]="dailySales()?.items?.length ?? 0" [(pageSize)]="dailyItemsPageSize" [(pageIndex)]="dailyItemsPageIndex" />\r
\r
    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
      <table class="w-full border-collapse text-sm">\r
        <thead class="bg-slate-50 dark:bg-slate-700">\r
          <tr>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.sku' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.qty' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.sales' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.cost' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.profit' | translate }}</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let r of displayedDailyItems()" class="border-t border-slate-100 dark:border-slate-700">\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ r.sku }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ r.productName }}</td>\r
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ r.quantitySold }}</td>\r
            <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ r.salesAmount | money }}</td>\r
            <td class="px-3 py-2 text-right text-slate-900 dark:text-slate-300">{{ r.costAmount | money }}</td>\r
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ r.profitAmount | money }}</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </section>\r
\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 xl:col-span-2">\r
    <div class="flex items-center justify-between">\r
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">Movement Audit</h3>\r
      <button class="rounded-xl bg-pink-500 px-3 py-2 text-xs font-semibold text-white" (click)="loadAudit()">\r
        {{ 'common.apply' | translate }}\r
      </button>\r
    </div>\r
\r
    <form class="mt-3 grid gap-3 sm:grid-cols-3" [formGroup]="auditForm" (ngSubmit)="loadAudit()">\r
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
        {{ 'common.type' | translate }} (optional)\r
        <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="type" placeholder="IN/OUT/LOSS" />\r
      </label>\r
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
        {{ 'common.from' | translate }} (Instant e.g. 2026-01-01T00:00:00Z)\r
        <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="from" />\r
      </label>\r
      <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
        {{ 'common.to' | translate }} (Instant e.g. 2026-12-31T23:59:59Z)\r
        <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="to" />\r
      </label>\r
    </form>\r
\r
    <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
\r
    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
      <table class="w-full border-collapse text-sm">\r
        <thead class="bg-slate-50 dark:bg-slate-700">\r
          <tr>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.date' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.type' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.sku' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.product' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.batch' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.qty' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.by' | translate }}</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let m of movements" class="border-t border-slate-100 dark:border-slate-700">\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ m.createdAt }}</td>\r
            <td class="px-3 py-2 font-semibold text-slate-900 dark:text-slate-300">{{ m.type }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ m.sku }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ m.productName }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ m.batchNumber }}</td>\r
            <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ m.quantity }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ m.createdBy || '-' }}</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="mt-3 flex items-center justify-between" *ngIf="totalPages > 1">\r
      <div class="text-xs text-slate-600 dark:text-slate-400">\r
        {{ 'common.page' | translate }} {{ currentPage() }} {{ 'common.of' | translate }} {{ totalPages }} ({{ allMovements().length }} {{ 'common.total' | translate }})\r
      </div>\r
      <div class="flex gap-2">\r
        <button\r
          type="button"\r
          class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-50"\r
          (click)="previousPage()"\r
          [disabled]="currentPage() === 1"\r
        >\r
          {{ 'common.previous' | translate }}\r
        </button>\r
        <button\r
          type="button"\r
          class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-50"\r
          (click)="nextPage()"\r
          [disabled]="currentPage() === totalPages"\r
        >\r
          {{ 'common.next' | translate }}\r
        </button>\r
      </div>\r
    </div>\r
  </section>\r
</div>\r
` }]
  }], () => [{ type: GraphqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsPage, { className: "ReportsPage", filePath: "app/features/reports/reports.page.ts", lineNumber: 65 });
})();

// src/app/features/profit-management/profit-management.page.ts
function ProfitManagementPage_label_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "input", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "common.date"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r0.form.controls.date);
  }
}
function ProfitManagementPage_label_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "input", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "common.year"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r0.form.controls.year);
  }
}
function ProfitManagementPage_label_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "input", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "common.month"), " (1-12) ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r0.form.controls.month);
  }
}
function ProfitManagementPage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function ProfitManagementPage_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "common.loading"), "...");
  }
}
function ProfitManagementPage_tr_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.noData"));
  }
}
function ProfitManagementPage_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 32)(1, "td", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 34);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 34);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 35);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "money");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, r_r2.sales));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, r_r2.grossProfit));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, r_r2.expenses));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", r_r2.netProfit >= 0 ? "text-pink-500 dark:text-pink-400" : "text-[#B81104] dark:text-red-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, r_r2.netProfit));
  }
}
var ProfitManagementPage = class _ProfitManagementPage {
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  gql = inject(GraphqlService);
  branchCtx = inject(BranchContext);
  fb = inject(FormBuilder);
  form = this.fb.group({
    mode: ["DAY", [Validators.required]],
    date: [(/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [Validators.required]],
    month: [String((/* @__PURE__ */ new Date()).getMonth() + 1).padStart(2, "0"), [Validators.required]],
    year: [String((/* @__PURE__ */ new Date()).getFullYear()), [Validators.required]]
  });
  rows = signal([], ...ngDevMode ? [{ debugName: "rows" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  displayedRows = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.rows().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedRows" }] : []);
  totalSales = computed(() => this.rows().reduce((s, r) => s + Number(r.sales ?? 0), 0), ...ngDevMode ? [{ debugName: "totalSales" }] : []);
  totalGrossProfit = computed(() => this.rows().reduce((s, r) => s + Number(r.grossProfit ?? 0), 0), ...ngDevMode ? [{ debugName: "totalGrossProfit" }] : []);
  totalExpenses = computed(() => this.rows().reduce((s, r) => s + Number(r.expenses ?? 0), 0), ...ngDevMode ? [{ debugName: "totalExpenses" }] : []);
  totalNetProfit = computed(() => this.rows().reduce((s, r) => s + Number(r.netProfit ?? 0), 0), ...ngDevMode ? [{ debugName: "totalNetProfit" }] : []);
  netProfitIsPositive = computed(() => this.totalNetProfit() >= 0, ...ngDevMode ? [{ debugName: "netProfitIsPositive" }] : []);
  constructor() {
    this.load();
  }
  daysInMonth(year, month1to12) {
    return new Date(year, month1to12, 0).getDate();
  }
  pad2(n) {
    return String(n).padStart(2, "0");
  }
  buildMonthRows(year, month1to12) {
    const days = this.daysInMonth(year, month1to12);
    const m = this.pad2(month1to12);
    return Array.from({ length: days }).map((_, idx) => {
      const day = idx + 1;
      const d = this.pad2(day);
      const date = `${year}-${m}-${d}`;
      return { label: date, from: date, to: date, sales: 0, grossProfit: 0, expenses: 0, netProfit: 0 };
    });
  }
  buildYearRows(year) {
    return Array.from({ length: 12 }).map((_, idx) => {
      const month = idx + 1;
      const m = this.pad2(month);
      const from = `${year}-${m}-01`;
      const to = `${year}-${m}-${this.pad2(this.daysInMonth(year, month))}`;
      return { label: `${year}-${m}`, from, to, sales: 0, grossProfit: 0, expenses: 0, netProfit: 0 };
    });
  }
  selectedRange() {
    const raw = this.form.getRawValue();
    const mode = raw.mode ?? "DAY";
    if (mode === "DAY") {
      const date = String(raw.date ?? "").trim();
      if (!date)
        return null;
      return {
        from: date,
        to: date,
        mode,
        rows: [{ label: date, from: date, to: date, sales: 0, grossProfit: 0, expenses: 0, netProfit: 0 }]
      };
    }
    const year = Number(raw.year ?? "");
    if (!year)
      return null;
    if (mode === "MONTH") {
      const month = Number(raw.month ?? "");
      if (!month || month < 1 || month > 12)
        return null;
      const rows2 = this.buildMonthRows(year, month);
      return { from: rows2[0].from, to: rows2[rows2.length - 1].to, mode, rows: rows2 };
    }
    const rows = this.buildYearRows(year);
    return { from: rows[0].from, to: rows[rows.length - 1].to, mode, rows };
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    this.pageIndex.set(0);
    const range = this.selectedRange();
    if (!range) {
      this.rows.set([]);
      this.loading.set(false);
      return;
    }
    const qReport = `query SalesDailyReports($from: String!, $to: String!, $branch: String) {
      salesDailyReports(from: $from, to: $to, branch: $branch) {
        date
        totalSalesAmount
        totalCostAmount
        totalProfitAmount
      }
    }`;
    const qExpenses = `query Expenses($filter: ExpenseFilter) {
      expenses(filter: $filter) {
        id
        date
        amount
        category { id name active }
      }
    }`;
    forkJoin({
      report: this.gql.request(qReport, { from: range.from, to: range.to, branch: this.branchCtx.effective() }),
      expenses: this.gql.request(qExpenses, { filter: { from: range.from, to: range.to, branch: this.branchCtx.effective() } })
    }).subscribe({
      next: ({ report, expenses }) => {
        const salesByDate = /* @__PURE__ */ new Map();
        for (const r of report?.salesDailyReports ?? []) {
          salesByDate.set(String(r.date), r);
        }
        const expList = expenses?.expenses ?? [];
        const mapped = range.rows.map((row) => {
          const inRange = (d) => d >= row.from && d <= row.to;
          const sales = (report?.salesDailyReports ?? []).filter((r) => inRange(String(r.date)));
          const salesTotal = sales.reduce((s, r) => s + Number(r.totalSalesAmount ?? 0), 0);
          const gross = sales.reduce((s, r) => s + Number(r.totalProfitAmount ?? 0), 0);
          const expTotal = expList.filter((e) => inRange(String(e.date ?? ""))).reduce((s, e) => s + Number(e.amount ?? 0), 0);
          return __spreadProps(__spreadValues({}, row), { sales: salesTotal, grossProfit: gross, expenses: expTotal, netProfit: gross - expTotal });
        });
        this.rows.set(mapped);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load profit");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function ProfitManagementPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfitManagementPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfitManagementPage, selectors: [["cis-profit-management-page"]], decls: 81, vars: 68, consts: [[1, "space-y-4"], [1, "flex", "flex-wrap", "items-end", "justify-between", "gap-3"], [1, "text-xl", "font-bold", "text-slate-900", "dark:text-slate-100"], [1, "text-sm", "text-slate-500", "dark:text-slate-400"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-pink-600", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "grid", "grid-cols-1", "gap-3", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "ring-1", "ring-slate-200", "dark:ring-slate-700", "md:grid-cols-4"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], [1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "formControl"], ["value", "DAY"], ["value", "MONTH"], ["value", "YEAR"], ["class", "grid gap-2 text-xs text-slate-700 dark:text-slate-300", 4, "ngIf"], ["class", "rounded-2xl bg-[#B81104]/10 dark:bg-red-900/20 p-4 text-sm text-[#B81104] dark:text-red-400 ring-1 ring-[#B81104]/25 dark:ring-red-700", 4, "ngIf"], [1, "cis-stat-grid", "grid", "grid-cols-1", "gap-3", "md:grid-cols-4"], ["data-tone", "blue", 1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "ring-1", "ring-slate-200", "dark:ring-slate-700"], [1, "text-xs", "text-slate-500", "dark:text-slate-400"], [1, "mt-1", "text-2xl", "font-extrabold", "text-slate-900", "dark:text-slate-100"], ["data-tone", "violet", 1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "ring-1", "ring-slate-200", "dark:ring-slate-700"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "ring-1", "ring-slate-200", "dark:ring-slate-700"], [1, "mt-1", "text-2xl", "font-extrabold", 3, "ngClass"], [1, "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-3", "overflow-x-auto", "rounded-2xl", "bg-white", "dark:bg-slate-800", "ring-1", "ring-slate-200", "dark:ring-slate-700"], [1, "min-w-full", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700", "text-left", "text-xs", "text-slate-500", "dark:text-slate-300"], [1, "px-4", "py-3"], [4, "ngIf"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], ["type", "date", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "formControl"], ["type", "number", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "formControl"], ["type", "number", "min", "1", "max", "12", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "formControl"], [1, "rounded-2xl", "bg-[#B81104]/10", "dark:bg-red-900/20", "p-4", "text-sm", "text-[#B81104]", "dark:text-red-400", "ring-1", "ring-[#B81104]/25", "dark:ring-red-700"], ["colspan", "5", 1, "px-4", "py-4", "text-slate-500", "dark:text-slate-400"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-4", "py-3", "font-medium", "text-slate-900", "dark:text-slate-300"], [1, "px-4", "py-3", "text-slate-900", "dark:text-slate-300"], [1, "px-4", "py-3", 3, "ngClass"]], template: function ProfitManagementPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
      \u0275\u0275text(4, "Profit Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275text(6, "Net profit = gross profit - expenses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function ProfitManagementPage_Template_button_click_7_listener() {
        return ctx.load();
      });
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "form", 5)(11, "label", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementStart(14, "select", 7)(15, "option", 8);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 9);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 10);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(24, ProfitManagementPage_label_24_Template, 4, 4, "label", 11)(25, ProfitManagementPage_label_25_Template, 4, 4, "label", 11)(26, ProfitManagementPage_label_26_Template, 4, 4, "label", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, ProfitManagementPage_div_27_Template, 2, 1, "div", 12);
      \u0275\u0275elementStart(28, "div", 13)(29, "div", 14)(30, "div", 15);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 16);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 17)(37, "div", 15);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 16);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 18)(44, "div", 15);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 16);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "money");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 18)(51, "div", 15);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 19);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "money");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "cis-pager", 20);
      \u0275\u0275twoWayListener("pageSizeChange", function ProfitManagementPage_Template_cis_pager_pageSizeChange_57_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      })("pageIndexChange", function ProfitManagementPage_Template_cis_pager_pageIndexChange_57_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 21)(59, "table", 22)(60, "thead", 23)(61, "tr")(62, "th", 24);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 24);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 24);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 24);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 24);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "tbody");
      \u0275\u0275template(78, ProfitManagementPage_tr_78_Template, 4, 3, "tr", 25)(79, ProfitManagementPage_tr_79_Template, 4, 3, "tr", 25)(80, ProfitManagementPage_tr_80_Template, 15, 14, "tr", 26);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 32, "common.refresh"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 34, "common.mode"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.form.controls.mode);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 36, "common.day"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 38, "common.month"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 40, "common.year"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.form.getRawValue().mode === "DAY");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.form.getRawValue().mode !== "DAY");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.form.getRawValue().mode === "MONTH");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 42, "common.sales"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 44, ctx.totalSales()));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 46, "common.grossProfit"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 48, ctx.totalGrossProfit()));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 50, "common.expenses"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 52, ctx.totalExpenses()));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("data-tone", ctx.netProfitIsPositive() ? "green" : "red");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 54, "common.netProfit"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.netProfitIsPositive() ? "text-emerald-700 dark:text-emerald-400" : "text-[#B81104] dark:text-red-400");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 56, ctx.totalNetProfit()), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("total", ctx.rows().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 58, "common.period"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 60, "common.sales"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 62, "common.grossProfit"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 64, "common.expenses"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 66, "common.netProfit"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.displayedRows());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormControlDirective, PagerComponent, MoneyPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfitManagementPage, [{
    type: Component,
    args: [{ selector: "cis-profit-management-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, MoneyPipe, TranslatePipe, PagerComponent], template: `<div class="space-y-4">\r
  <div class="flex flex-wrap items-end justify-between gap-3">\r
    <div>\r
      <div class="text-xl font-bold text-slate-900 dark:text-slate-100">Profit Management</div>\r
      <div class="text-sm text-slate-500 dark:text-slate-400">Net profit = gross profit - expenses</div>\r
    </div>\r
\r
    <button\r
      type="button"\r
      class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-70"\r
      (click)="load()"\r
      [disabled]="loading()"\r
    >\r
    {{ 'common.refresh' | translate }}\r
    </button>\r
  </div>\r
\r
  <form class="grid grid-cols-1 gap-3 rounded-2xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-200 dark:ring-slate-700 md:grid-cols-4">\r
    <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
      {{ 'common.mode' | translate }}\r
      <select class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" [formControl]="$any(form.controls.mode)">\r
        <option value="DAY">{{ 'common.day' | translate }}</option>\r
        <option value="MONTH">{{ 'common.month' | translate }}</option>\r
        <option value="YEAR">{{ 'common.year' | translate }}</option>\r
      </select>\r
    </label>\r
\r
    <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300" *ngIf="form.getRawValue().mode === 'DAY'">\r
      {{ 'common.date' | translate }}\r
      <input type="date" class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" [formControl]="$any(form.controls.date)" />\r
    </label>\r
\r
    <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300" *ngIf="form.getRawValue().mode !== 'DAY'">\r
      {{ 'common.year' | translate }}\r
      <input type="number" class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" [formControl]="$any(form.controls.year)" />\r
    </label>\r
\r
    <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300" *ngIf="form.getRawValue().mode === 'MONTH'">\r
      {{ 'common.month' | translate }} (1-12)\r
      <input type="number" min="1" max="12" class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" [formControl]="$any(form.controls.month)" />\r
    </label>\r
  </form>\r
\r
  <div *ngIf="error()" class="rounded-2xl bg-[#B81104]/10 dark:bg-red-900/20 p-4 text-sm text-[#B81104] dark:text-red-400 ring-1 ring-[#B81104]/25 dark:ring-red-700">\r
    {{ error() }}\r
  </div>\r
\r
  <div class="cis-stat-grid grid grid-cols-1 gap-3 md:grid-cols-4">\r
    <div data-tone="blue" class="rounded-2xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-200 dark:ring-slate-700">\r
      <div class="text-xs text-slate-500 dark:text-slate-400">{{ 'common.sales' | translate }}</div>\r
      <div class="mt-1 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ totalSales() | money }}</div>\r
    </div>\r
    <div data-tone="violet" class="rounded-2xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-200 dark:ring-slate-700">\r
      <div class="text-xs text-slate-500 dark:text-slate-400">{{ 'common.grossProfit' | translate }}</div>\r
      <div class="mt-1 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ totalGrossProfit() | money }}</div>\r
    </div>\r
    <div class="rounded-2xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-200 dark:ring-slate-700">\r
      <div class="text-xs text-slate-500 dark:text-slate-400">{{ 'common.expenses' | translate }}</div>\r
      <div class="mt-1 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{{ totalExpenses() | money }}</div>\r
    </div>\r
    <div [attr.data-tone]="netProfitIsPositive() ? 'green' : 'red'" class="rounded-2xl bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-200 dark:ring-slate-700">\r
      <div class="text-xs text-slate-500 dark:text-slate-400">{{ 'common.netProfit' | translate }}</div>\r
      <div\r
        class="mt-1 text-2xl font-extrabold"\r
        [ngClass]="netProfitIsPositive() ? 'text-emerald-700 dark:text-emerald-400' : 'text-[#B81104] dark:text-red-400'"\r
      >\r
        {{ totalNetProfit() | money }}\r
      </div>\r
    </div>\r
  </div>\r
\r
  <cis-pager class="block" [total]="rows().length" [(pageSize)]="pageSize" [(pageIndex)]="pageIndex" />\r
\r
  <div class="mt-3 overflow-x-auto rounded-2xl bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700">\r
    <table class="min-w-full text-sm">\r
      <thead class="bg-slate-50 dark:bg-slate-700 text-left text-xs text-slate-500 dark:text-slate-300">\r
        <tr>\r
          <th class="px-4 py-3">{{ 'common.period' | translate }}</th>\r
          <th class="px-4 py-3">{{ 'common.sales' | translate }}</th>\r
          <th class="px-4 py-3">{{ 'common.grossProfit' | translate }}</th>\r
          <th class="px-4 py-3">{{ 'common.expenses' | translate }}</th>\r
          <th class="px-4 py-3">{{ 'common.netProfit' | translate }}</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngIf="loading()">\r
          <td class="px-4 py-4 text-slate-500 dark:text-slate-400" colspan="5">{{ 'common.loading' | translate }}...</td>\r
        </tr>\r
        <tr *ngIf="!loading() && rows().length === 0">\r
          <td class="px-4 py-4 text-slate-500 dark:text-slate-400" colspan="5">{{ 'common.noData' | translate }}</td>\r
        </tr>\r
        <tr *ngFor="let r of displayedRows()" class="border-t border-slate-100 dark:border-slate-700">\r
          <td class="px-4 py-3 font-medium text-slate-900 dark:text-slate-300">{{ r.label }}</td>\r
          <td class="px-4 py-3 text-slate-900 dark:text-slate-300">{{ r.sales | money }}</td>\r
          <td class="px-4 py-3 text-slate-900 dark:text-slate-300">{{ r.grossProfit | money }}</td>\r
          <td class="px-4 py-3 text-slate-900 dark:text-slate-300">{{ r.expenses | money }}</td>\r
          <td class="px-4 py-3" [ngClass]="r.netProfit >= 0 ? 'text-pink-500 dark:text-pink-400' : 'text-[#B81104] dark:text-red-400'">{{ r.netProfit | money }}</td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfitManagementPage, { className: "ProfitManagementPage", filePath: "app/features/profit-management/profit-management.page.ts", lineNumber: 53 });
})();

// src/app/features/home/home.page.ts
function HomePage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function HomePage_ng_container_3_a_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 18)(2, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 21)(2, "path", 22)(3, "path", 23);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 24)(2, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 26)(2, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 28)(2, "path", 29)(3, "path", 30);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 31)(2, "path", 32);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 33)(2, "path", 34);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 28)(2, "path", 29);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 35)(2, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 28)(2, "path", 29)(3, "path", 35)(4, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 37)(2, "path", 38)(3, "path", 39)(4, "path", 40)(5, "path", 41);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 42);
    \u0275\u0275element(1, "path", 18)(2, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 21)(2, "path", 22)(3, "path", 23);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 24)(2, "path", 25);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 28)(2, "path", 29);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 26)(2, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 28)(2, "path", 29)(3, "path", 30);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 31)(2, "path", 32);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 33)(2, "path", 34);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 35)(2, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 28)(2, "path", 29)(3, "path", 35)(4, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1__svg_svg_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 37)(2, "path", 38)(3, "path", 39)(4, "path", 40)(5, "path", 41);
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "div", 7);
    \u0275\u0275template(2, HomePage_ng_container_3_a_1__svg_svg_2_Template, 3, 0, "svg", 8)(3, HomePage_ng_container_3_a_1__svg_svg_3_Template, 4, 0, "svg", 9)(4, HomePage_ng_container_3_a_1__svg_svg_4_Template, 3, 0, "svg", 9)(5, HomePage_ng_container_3_a_1__svg_svg_5_Template, 3, 0, "svg", 9)(6, HomePage_ng_container_3_a_1__svg_svg_6_Template, 4, 0, "svg", 9)(7, HomePage_ng_container_3_a_1__svg_svg_7_Template, 3, 0, "svg", 9)(8, HomePage_ng_container_3_a_1__svg_svg_8_Template, 3, 0, "svg", 9)(9, HomePage_ng_container_3_a_1__svg_svg_9_Template, 3, 0, "svg", 9)(10, HomePage_ng_container_3_a_1__svg_svg_10_Template, 3, 0, "svg", 9)(11, HomePage_ng_container_3_a_1__svg_svg_11_Template, 5, 0, "svg", 9)(12, HomePage_ng_container_3_a_1__svg_svg_12_Template, 6, 0, "svg", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "span", 11);
    \u0275\u0275template(15, HomePage_ng_container_3_a_1__svg_svg_15_Template, 3, 0, "svg", 12)(16, HomePage_ng_container_3_a_1__svg_svg_16_Template, 4, 0, "svg", 13)(17, HomePage_ng_container_3_a_1__svg_svg_17_Template, 3, 0, "svg", 13)(18, HomePage_ng_container_3_a_1__svg_svg_18_Template, 3, 0, "svg", 13)(19, HomePage_ng_container_3_a_1__svg_svg_19_Template, 3, 0, "svg", 13)(20, HomePage_ng_container_3_a_1__svg_svg_20_Template, 4, 0, "svg", 13)(21, HomePage_ng_container_3_a_1__svg_svg_21_Template, 3, 0, "svg", 13)(22, HomePage_ng_container_3_a_1__svg_svg_22_Template, 3, 0, "svg", 13)(23, HomePage_ng_container_3_a_1__svg_svg_23_Template, 3, 0, "svg", 13)(24, HomePage_ng_container_3_a_1__svg_svg_24_Template, 5, 0, "svg", 13)(25, HomePage_ng_container_3_a_1__svg_svg_25_Template, 6, 0, "svg", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 14)(27, "div", 15);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 16);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", c_r2.route);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", c_r2.icon === "products");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "inventory");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "stockMovements");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "purchasing");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "sales");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "mySales");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "expiryAlerts");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "expenses");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "reports");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "profitManagement");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "users");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", c_r2.icon === "products");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "inventory");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "stockMovements");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "expenses");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "purchasing");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "sales");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "mySales");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "expiryAlerts");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "reports");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "profitManagement");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.icon === "users");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.description);
  }
}
function HomePage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HomePage_ng_container_3_a_1_Template, 31, 25, "a", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r2.hidden);
  }
}
var HomePage = class _HomePage {
  gql;
  auth;
  router;
  translation;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  me = signal(null, ...ngDevMode ? [{ debugName: "me" }] : []);
  myPermissions = signal([], ...ngDevMode ? [{ debugName: "myPermissions" }] : []);
  isAdmin = computed(() => (this.me()?.roles ?? []).includes("ADMIN"), ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  canView = (module) => {
    if (this.isAdmin())
      return true;
    const mod = String(module).toUpperCase();
    const p = this.myPermissions().find((x) => String(x.module).toUpperCase() === mod);
    return Boolean(p?.canView);
  };
  cards = computed(() => {
    this.translation.currentLang();
    return [
      {
        title: this.translation.translate("nav.counter"),
        icon: "sales",
        description: this.translation.translate("home.counter.description"),
        route: "/counter",
        hidden: !this.canView("SALES") && !this.canView("EXPENSES")
      },
      {
        title: this.translation.translate("nav.products"),
        icon: "products",
        description: this.translation.translate("home.products.description"),
        route: "/product-dashboard",
        hidden: !this.canView("PRODUCTS")
      },
      {
        title: this.translation.translate("nav.inventory"),
        icon: "inventory",
        description: this.translation.translate("home.inventory.description"),
        route: "/inventory",
        hidden: !this.canView("INVENTORY")
      },
      {
        title: this.translation.translate("nav.stockMovements"),
        icon: "stockMovements",
        description: this.translation.translate("home.stockMovements.description"),
        route: "/stock-movements",
        hidden: !this.canView("STOCK_MOVEMENTS")
      },
      {
        title: this.translation.translate("nav.purchasing"),
        icon: "purchasing",
        description: this.translation.translate("home.purchasing.description"),
        route: "/purchasing",
        hidden: !this.canView("PURCHASING")
      },
      {
        title: this.translation.translate("nav.sales"),
        icon: "sales",
        description: this.translation.translate("home.sales.description"),
        route: "/sales",
        hidden: !this.canView("SALES")
      },
      {
        title: this.translation.translate("nav.mySales"),
        icon: "mySales",
        description: this.translation.translate("home.mySales.description"),
        route: "/my-sales",
        hidden: !this.canView("MY_SALES")
      },
      {
        title: this.translation.translate("nav.expiryAlerts"),
        icon: "expiryAlerts",
        description: this.translation.translate("home.expiryAlerts.description"),
        route: "/expiry-alerts",
        hidden: !this.canView("INVENTORY")
      },
      {
        title: this.translation.translate("nav.expenses"),
        icon: "expenses",
        description: this.translation.translate("home.expenses.description"),
        route: "/expenses",
        hidden: !this.canView("EXPENSES")
      },
      {
        title: this.translation.translate("nav.reports"),
        icon: "reports",
        description: this.translation.translate("home.reports.description"),
        route: "/reports",
        hidden: !this.canView("REPORTS")
      },
      {
        title: this.translation.translate("nav.profitManagement"),
        icon: "profitManagement",
        description: this.translation.translate("home.profitManagement.description"),
        route: "/profit-management",
        hidden: !this.canView("PROFIT_MANAGEMENT")
      },
      {
        title: this.translation.translate("nav.usersRoles"),
        icon: "users",
        description: this.translation.translate("home.usersRoles.description"),
        route: "/users",
        hidden: !this.canView("USERS_ROLES")
      }
    ];
  }, ...ngDevMode ? [{ debugName: "cards" }] : []);
  constructor(gql, auth, router, translation) {
    this.gql = gql;
    this.auth = auth;
    this.router = router;
    this.translation = translation;
    this.loadMe();
    this.loadMyPermissions();
  }
  loadMe() {
    this.loading.set(true);
    this.error.set(null);
    const query = `query Me { me { id name email roles } }`;
    this.gql.request(query).subscribe({
      next: (res) => {
        this.me.set(res.me);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load user");
        this.loading.set(false);
      }
    });
  }
  loadMyPermissions() {
    const query = `query MyPermissions { myPermissions { module canView canCreate canEdit canDelete } }`;
    this.gql.request(query).subscribe({
      next: (res) => this.myPermissions.set(res.myPermissions ?? []),
      error: () => this.myPermissions.set([])
    });
  }
  logout() {
    this.auth.clear();
    this.router.navigateByUrl("/login");
  }
  static \u0275fac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePage)(\u0275\u0275directiveInject(GraphqlService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["cis-home-page"]], decls: 4, vars: 2, consts: [[1, "cis-home-header"], ["class", "cis-home-error dark:text-red-400", 4, "ngIf"], [1, "cis-home-grid"], [4, "ngFor", "ngForOf"], [1, "cis-home-error", "dark:text-red-400"], ["class", "cis-home-tile group", 3, "routerLink", 4, "ngIf"], [1, "cis-home-tile", "group", 3, "routerLink"], [1, "cis-home-tile-watermark", "dark:text-pink-500/15"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "class", "h-40 w-40", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "class", "h-40 w-40 dark:text-pink-500/15", 4, "ngIf"], [1, "cis-home-tile-content"], [1, "cis-home-tile-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "class", "h-7 w-7", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "class", "h-6 w-6", 4, "ngIf"], [1, "cis-home-tile-copy"], [1, "dark:text-white"], [1, "dark:text-slate-400"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-40", "w-40"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 13h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-40", "w-40", "dark:text-pink-500/15"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4v10l8 4 8-4V7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 3v18"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 7l8 4 8-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8 7h13M8 12h13M8 17h13"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 7h.01M3 12h.01M3 17h.01"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 3h2l.4 2M7 13h10l4-8H5.4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7 13l-1.5 7h13L17 13"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v2m0 10v2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 12a8 8 0 11-16 0 8 8 0 0116 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 14l2 2 4-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v4m0 4h.01"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 3v18h18"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7 15l3-3 3 2 5-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17 20h5v-2a4 4 0 00-4-4h-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 20H2v-2a4 4 0 014-4h1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16 3.13a4 4 0 010 7.75"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8 3.13a4 4 0 000 7.75"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 12a4 4 0 100-8 4 4 0 000 8z"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-7", "w-7"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "h-6", "w-6"]], template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
      \u0275\u0275template(1, HomePage_div_1_Template, 2, 1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275template(3, HomePage_ng_container_3_Template, 2, 1, "ng-container", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.cards());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.cis-home-shell[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n  padding: 28px;\n  border-radius: 28px;\n  background:\n    radial-gradient(\n      circle at 10% 12%,\n      rgba(var(--cis-primary-rgb), 0.12),\n      transparent 28%),\n    linear-gradient(\n      135deg,\n      var(--cis-primary-soft) 0%,\n      var(--cis-surface) 42%,\n      var(--cis-page) 100%);\n}\n.cis-home-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.cis-home-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--cis-primary-strong);\n  font-size: 28px;\n  font-weight: 900;\n  letter-spacing: -0.04em;\n}\n.cis-home-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: var(--cis-muted);\n  font-size: 12px;\n  font-weight: 700;\n}\n.cis-home-error[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  color: #b91c1c;\n  font-size: 14px;\n}\n.dark[_nghost-%COMP%]   .cis-home-error[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .cis-home-error[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.cis-home-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 18px;\n  margin: 28px auto 0;\n  max-width: 1440px;\n}\n.cis-home-tile[_ngcontent-%COMP%] {\n  --tile:\n    115,\n    103,\n    216;\n  --tile-deep:\n    78,\n    67,\n    168;\n  position: relative;\n  display: flex;\n  min-height: 150px;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  border: 1px solid rgba(var(--tile), 0.22);\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--cis-surface),\n      rgba(var(--tile), 0.12));\n  padding: 22px;\n  color: inherit;\n  text-decoration: none;\n  box-shadow: 0 18px 45px rgba(var(--tile), 0.12);\n  transition:\n    transform 180ms ease,\n    border-color 180ms ease,\n    box-shadow 180ms ease;\n}\n.cis-home-tile[_ngcontent-%COMP%]:nth-child(6n+2) {\n  --tile:\n    34,\n    181,\n    115;\n  --tile-deep:\n    21,\n    128,\n    61;\n}\n.cis-home-tile[_ngcontent-%COMP%]:nth-child(6n+3) {\n  --tile:\n    245,\n    158,\n    11;\n  --tile-deep:\n    194,\n    65,\n    12;\n}\n.cis-home-tile[_ngcontent-%COMP%]:nth-child(6n+4) {\n  --tile:\n    20,\n    184,\n    196;\n  --tile-deep:\n    14,\n    116,\n    144;\n}\n.cis-home-tile[_ngcontent-%COMP%]:nth-child(6n+5) {\n  --tile:\n    236,\n    72,\n    153;\n  --tile-deep:\n    190,\n    24,\n    93;\n}\n.cis-home-tile[_ngcontent-%COMP%]:nth-child(6n+6) {\n  --tile:\n    59,\n    130,\n    246;\n  --tile-deep:\n    29,\n    78,\n    216;\n}\n.cis-home-tile[_ngcontent-%COMP%]:hover {\n  border-color: rgba(var(--tile), 0.5);\n  box-shadow: 0 24px 60px rgba(var(--tile), 0.24);\n  transform: translateY(-3px);\n}\n.cis-home-tile[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(var(--tile), 0.06),\n      rgba(var(--tile), 0.18));\n  opacity: 0;\n  transition: opacity 180ms ease;\n}\n.cis-home-tile[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.cis-home-tile-watermark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -58px;\n  right: -54px;\n  color: rgba(var(--tile), 0.14);\n  pointer-events: none;\n}\n.cis-home-tile-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 16px;\n}\n.cis-home-tile-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 58px;\n  height: 58px;\n  flex-shrink: 0;\n  place-items: center;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(var(--tile)),\n      rgb(var(--tile-deep)));\n  color: #ffffff;\n  box-shadow: 0 14px 28px rgba(var(--tile), 0.3);\n}\n.cis-home-tile-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.cis-home-tile-copy[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--cis-text);\n  font-size: 16px;\n  font-weight: 900;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  transition: color 180ms ease;\n}\n.cis-home-tile[_ngcontent-%COMP%]:hover   .cis-home-tile-copy[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: rgb(var(--tile-deep));\n}\n.cis-home-tile-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: var(--cis-muted);\n  font-size: 12px;\n  line-height: 1.45;\n}\n@media (max-width: 1180px) {\n  .cis-home-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 820px) {\n  .cis-home-shell[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .cis-home-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 560px) {\n  .cis-home-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=home.page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "cis-home-page", standalone: true, imports: [CommonModule, RouterLink, TranslatePipe], template: `<!-- <div class="cis-home-shell"> -->\r
  <div class="cis-home-header">\r
    <!-- <div>\r
      <h2 class="dark:text-white">Home</h2>\r
      <div *ngIf="me() as u" class="dark:text-slate-400">Logged in as {{ u.name }} ({{ u.email }})</div>\r
    </div> -->\r
  </div>\r
\r
  <div class="cis-home-error dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
\r
  <div class="cis-home-grid">\r
    <ng-container *ngFor="let c of cards()">\r
      <a\r
        *ngIf="!c.hidden"\r
        class="cis-home-tile group"\r
        [routerLink]="c.route"\r
      >\r
        <div class="cis-home-tile-watermark dark:text-pink-500/15">\r
          <svg\r
            *ngIf="c.icon === 'products'"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            class="h-40 w-40"\r
          >\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 13h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />\r
          </svg>\r
\r
          <svg\r
            *ngIf="c.icon === 'inventory'"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            class="h-40 w-40 dark:text-pink-500/15"\r
          >\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4v10l8 4 8-4V7z" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7l8 4 8-4" />\r
          </svg>\r
\r
          <svg\r
            *ngIf="c.icon === 'stockMovements'"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            class="h-40 w-40 dark:text-pink-500/15"\r
          >\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h13M8 12h13M8 17h13" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h.01M3 12h.01M3 17h.01" />\r
          </svg>\r
\r
          <svg\r
            *ngIf="c.icon === 'purchasing'"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            class="h-40 w-40 dark:text-pink-500/15"\r
          >\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 13l-1.5 7h13L17 13" />\r
          </svg>\r
\r
          <svg\r
            *ngIf="c.icon === 'sales'"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            class="h-40 w-40 dark:text-pink-500/15"\r
          >\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v2m0 10v2" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" />\r
          </svg>\r
\r
          <svg\r
            *ngIf="c.icon === 'mySales'"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            class="h-40 w-40 dark:text-pink-500/15"\r
          >\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 14l2 2 4-4" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />\r
          </svg>\r
\r
          <svg\r
            *ngIf="c.icon === 'expiryAlerts'"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            class="h-40 w-40 dark:text-pink-500/15"\r
          >\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 4h.01" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />\r
          </svg>\r
\r
          <svg\r
            *ngIf="c.icon === 'expenses'"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            class="h-40 w-40 dark:text-pink-500/15"\r
          >\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v2m0 10v2" />\r
          </svg>\r
\r
          <svg\r
            *ngIf="c.icon === 'reports'"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            class="h-40 w-40 dark:text-pink-500/15"\r
          >\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 15l3-3 3 2 5-6" />\r
          </svg>\r
\r
          <svg\r
            *ngIf="c.icon === 'profitManagement'"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            class="h-40 w-40 dark:text-pink-500/15"\r
          >\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v2m0 10v2" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 15l3-3 3 2 5-6" />\r
          </svg>\r
\r
          <svg\r
            *ngIf="c.icon === 'users'"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            class="h-40 w-40 dark:text-pink-500/15"\r
          >\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 20H2v-2a4 4 0 014-4h1" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 3.13a4 4 0 010 7.75" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 3.13a4 4 0 000 7.75" />\r
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8z" />\r
          </svg>\r
        </div>\r
\r
        <div class="cis-home-tile-content">\r
          <span class="cis-home-tile-icon">\r
                <svg\r
                  *ngIf="c.icon === 'products'"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  class="h-7 w-7"\r
                >\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 13h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />\r
                </svg>\r
\r
                <svg\r
                  *ngIf="c.icon === 'inventory'"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  class="h-6 w-6"\r
                >\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4v10l8 4 8-4V7z" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 7l8 4 8-4" />\r
                </svg>\r
\r
                <svg\r
                  *ngIf="c.icon === 'stockMovements'"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  class="h-6 w-6"\r
                >\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h13M8 12h13M8 17h13" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h.01M3 12h.01M3 17h.01" />\r
                </svg>\r
\r
                <svg\r
                  *ngIf="c.icon === 'expenses'"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  class="h-6 w-6"\r
                >\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v2m0 10v2" />\r
                </svg>\r
\r
                <svg\r
                  *ngIf="c.icon === 'purchasing'"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  class="h-6 w-6"\r
                >\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 13l-1.5 7h13L17 13" />\r
                </svg>\r
\r
                <svg\r
                  *ngIf="c.icon === 'sales'"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  class="h-6 w-6"\r
                >\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v2m0 10v2" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" />\r
                </svg>\r
\r
                <svg\r
                  *ngIf="c.icon === 'mySales'"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  class="h-6 w-6"\r
                >\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 14l2 2 4-4" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />\r
                </svg>\r
\r
                <svg\r
                  *ngIf="c.icon === 'expiryAlerts'"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  class="h-6 w-6"\r
                >\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 4h.01" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />\r
                </svg>\r
\r
                <svg\r
                  *ngIf="c.icon === 'reports'"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  class="h-6 w-6"\r
                >\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 15l3-3 3 2 5-6" />\r
                </svg>\r
\r
                <svg\r
                  *ngIf="c.icon === 'profitManagement'"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  class="h-6 w-6"\r
                >\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v2m0 10v2" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 15l3-3 3 2 5-6" />\r
                </svg>\r
\r
                <svg\r
                  *ngIf="c.icon === 'users'"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  class="h-6 w-6"\r
                >\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 20H2v-2a4 4 0 014-4h1" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 3.13a4 4 0 010 7.75" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 3.13a4 4 0 000 7.75" />\r
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8z" />\r
                </svg>\r
          </span>\r
\r
          <div class="cis-home-tile-copy">\r
            <div class="dark:text-white">{{ c.title }}</div>\r
            <p class="dark:text-slate-400">{{ c.description }}</p>\r
          </div>\r
        </div>\r
      </a>\r
    </ng-container>\r
  </div>\r
<!-- </div> -->\r
`, styles: ['/* src/app/features/home/home.page.scss */\n:host {\n  display: block;\n}\n.cis-home-shell {\n  min-height: calc(100vh - 64px);\n  padding: 28px;\n  border-radius: 28px;\n  background:\n    radial-gradient(\n      circle at 10% 12%,\n      rgba(var(--cis-primary-rgb), 0.12),\n      transparent 28%),\n    linear-gradient(\n      135deg,\n      var(--cis-primary-soft) 0%,\n      var(--cis-surface) 42%,\n      var(--cis-page) 100%);\n}\n.cis-home-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.cis-home-header h2 {\n  margin: 0;\n  color: var(--cis-primary-strong);\n  font-size: 28px;\n  font-weight: 900;\n  letter-spacing: -0.04em;\n}\n.cis-home-header h2 + div {\n  margin-top: 6px;\n  color: var(--cis-muted);\n  font-size: 12px;\n  font-weight: 700;\n}\n.cis-home-error {\n  margin-top: 16px;\n  color: #b91c1c;\n  font-size: 14px;\n}\n:host-context(.dark) .cis-home-error {\n  color: #fca5a5;\n}\n.cis-home-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 18px;\n  margin: 28px auto 0;\n  max-width: 1440px;\n}\n.cis-home-tile {\n  --tile:\n    115,\n    103,\n    216;\n  --tile-deep:\n    78,\n    67,\n    168;\n  position: relative;\n  display: flex;\n  min-height: 150px;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  border: 1px solid rgba(var(--tile), 0.22);\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--cis-surface),\n      rgba(var(--tile), 0.12));\n  padding: 22px;\n  color: inherit;\n  text-decoration: none;\n  box-shadow: 0 18px 45px rgba(var(--tile), 0.12);\n  transition:\n    transform 180ms ease,\n    border-color 180ms ease,\n    box-shadow 180ms ease;\n}\n.cis-home-tile:nth-child(6n+2) {\n  --tile:\n    34,\n    181,\n    115;\n  --tile-deep:\n    21,\n    128,\n    61;\n}\n.cis-home-tile:nth-child(6n+3) {\n  --tile:\n    245,\n    158,\n    11;\n  --tile-deep:\n    194,\n    65,\n    12;\n}\n.cis-home-tile:nth-child(6n+4) {\n  --tile:\n    20,\n    184,\n    196;\n  --tile-deep:\n    14,\n    116,\n    144;\n}\n.cis-home-tile:nth-child(6n+5) {\n  --tile:\n    236,\n    72,\n    153;\n  --tile-deep:\n    190,\n    24,\n    93;\n}\n.cis-home-tile:nth-child(6n+6) {\n  --tile:\n    59,\n    130,\n    246;\n  --tile-deep:\n    29,\n    78,\n    216;\n}\n.cis-home-tile:hover {\n  border-color: rgba(var(--tile), 0.5);\n  box-shadow: 0 24px 60px rgba(var(--tile), 0.24);\n  transform: translateY(-3px);\n}\n.cis-home-tile::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(var(--tile), 0.06),\n      rgba(var(--tile), 0.18));\n  opacity: 0;\n  transition: opacity 180ms ease;\n}\n.cis-home-tile:hover::before {\n  opacity: 1;\n}\n.cis-home-tile-watermark {\n  position: absolute;\n  top: -58px;\n  right: -54px;\n  color: rgba(var(--tile), 0.14);\n  pointer-events: none;\n}\n.cis-home-tile-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 16px;\n}\n.cis-home-tile-icon {\n  display: grid;\n  width: 58px;\n  height: 58px;\n  flex-shrink: 0;\n  place-items: center;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(var(--tile)),\n      rgb(var(--tile-deep)));\n  color: #ffffff;\n  box-shadow: 0 14px 28px rgba(var(--tile), 0.3);\n}\n.cis-home-tile-copy {\n  min-width: 0;\n}\n.cis-home-tile-copy div {\n  overflow: hidden;\n  color: var(--cis-text);\n  font-size: 16px;\n  font-weight: 900;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  transition: color 180ms ease;\n}\n.cis-home-tile:hover .cis-home-tile-copy div {\n  color: rgb(var(--tile-deep));\n}\n.cis-home-tile-copy p {\n  margin: 6px 0 0;\n  color: var(--cis-muted);\n  font-size: 12px;\n  line-height: 1.45;\n}\n@media (max-width: 1180px) {\n  .cis-home-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 820px) {\n  .cis-home-shell {\n    padding: 18px;\n  }\n  .cis-home-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 560px) {\n  .cis-home-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=home.page.css.map */\n'] }]
  }], () => [{ type: GraphqlService }, { type: AuthService }, { type: Router }, { type: TranslationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "app/features/home/home.page.ts", lineNumber: 58 });
})();

// src/app/features/expenses/expenses.page.ts
function ExpensesPage_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ExpensesPage_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "common.add"), " Expense ");
  }
}
function ExpensesPage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275listener("click", function ExpensesPage_div_5_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteConfirm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 29)(3, "div", 30);
    \u0275\u0275listener("click", function ExpensesPage_div_5_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 31);
    \u0275\u0275text(8, " Are you sure you want to delete this expense? This action cannot be undone. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 32)(10, "button", 33);
    \u0275\u0275listener("click", function ExpensesPage_div_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteConfirm());
    });
    \u0275\u0275text(11, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 34);
    \u0275\u0275listener("click", function ExpensesPage_div_5_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(13, " Delete ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 1, "common.delete"), " expense?");
  }
}
function ExpensesPage_div_31_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Day (", ctx_r1.selectedDay(), ")");
  }
}
function ExpensesPage_div_31_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Month (", ctx_r1.selectedMonth(), ")");
  }
}
function ExpensesPage_div_31_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Year (", ctx_r1.selectedYear(), ")");
  }
}
function ExpensesPage_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2, " Filter: ");
    \u0275\u0275template(3, ExpensesPage_div_31_span_3_Template, 2, 1, "span", 37)(4, ExpensesPage_div_31_span_4_Template, 2, 1, "span", 37)(5, ExpensesPage_div_31_span_5_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 38);
    \u0275\u0275listener("click", function ExpensesPage_div_31_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilter());
    });
    \u0275\u0275text(7, " Clear filter ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.activeFilter() === "day");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeFilter() === "month");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeFilter() === "year");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function ExpensesPage_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function ExpensesPage_ng_container_60_tr_16_tr_25_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function ExpensesPage_ng_container_60_tr_16_tr_25_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const e_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEdit(e_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.edit"), " ");
  }
}
function ExpensesPage_ng_container_60_tr_16_tr_25_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function ExpensesPage_ng_container_60_tr_16_tr_25_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const e_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(e_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "path", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.delete"), " ");
  }
}
function ExpensesPage_ng_container_60_tr_16_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 60)(1, "td", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 43);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 62);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 44)(11, "cis-row-actions");
    \u0275\u0275template(12, ExpensesPage_ng_container_60_tr_16_tr_25_button_12_Template, 5, 4, "button", 63)(13, ExpensesPage_ng_container_60_tr_16_tr_25_button_13_Template, 5, 4, "button", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((e_r8.category == null ? null : e_r8.category.name) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r8.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, e_r8.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r8.paymentMethod);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("EXPENSES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("EXPENSES"));
  }
}
function ExpensesPage_ng_container_60_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 50)(1, "td", 51)(2, "div", 52)(3, "span", 53);
    \u0275\u0275text(4, "Expense details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 54)(6, "table", 55)(7, "thead", 56)(8, "tr")(9, "th", 57);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 57);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 58);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 57);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 58);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, ExpensesPage_ng_container_60_tr_16_tr_25_Template, 14, 8, "tr", 59);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const g_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, "common.category"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 8, "common.description"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "common.amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 12, "common.payment"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 14, "common.actions"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", g_r6.items);
  }
}
function ExpensesPage_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 41)(2, "td", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 43);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 44)(10, "cis-row-actions")(11, "button", 45);
    \u0275\u0275listener("click", function ExpensesPage_ng_container_60_Template_button_click_11_listener() {
      const g_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDetails(g_r6.date));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 46);
    \u0275\u0275element(13, "path", 47)(14, "circle", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(16, ExpensesPage_ng_container_60_tr_16_Template, 26, 16, "tr", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const g_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(g_r6.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r6.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, g_r6.total));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailsDate() === g_r6.date ? "Hide details" : "Details", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailsDate() === g_r6.date);
  }
}
function ExpensesPage_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 68)(1, "td", 69);
    \u0275\u0275text(2, "No expenses");
    \u0275\u0275elementEnd()();
  }
}
function ExpensesPage_div_62_div_15_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275property("value", c_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r12.name);
  }
}
function ExpensesPage_div_62_div_15_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    \u0275\u0275property("value", p_r13.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r13.label);
  }
}
function ExpensesPage_div_62_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 83);
    \u0275\u0275listener("ngSubmit", function ExpensesPage_div_62_div_15_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addLine());
    });
    \u0275\u0275elementStart(5, "div", 73)(6, "label", 74);
    \u0275\u0275text(7, " Category ");
    \u0275\u0275elementStart(8, "select", 84)(9, "option", 85);
    \u0275\u0275text(10, "Select category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ExpensesPage_div_62_div_15_option_11_Template, 2, 2, "option", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 74);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275element(15, "input", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label", 88);
    \u0275\u0275text(17, " Description (optional) ");
    \u0275\u0275element(18, "input", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label", 74);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "select", 90);
    \u0275\u0275template(23, ExpensesPage_div_62_div_15_option_23_Template, 2, 2, "option", 86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 91);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "common.addLine"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.lineForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.categories());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 9, "common.amount"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 11, "common.paymentMethod"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 13, "common.addLine"), " ");
  }
}
function ExpensesPage_div_62_div_16_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275property("value", c_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r15.name);
  }
}
function ExpensesPage_div_62_div_16_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r16 = ctx.$implicit;
    \u0275\u0275property("value", p_r16.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r16.label);
  }
}
function ExpensesPage_div_62_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82);
    \u0275\u0275text(2, "Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 83);
    \u0275\u0275listener("ngSubmit", function ExpensesPage_div_62_div_16_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(4, "div", 73)(5, "label", 74);
    \u0275\u0275text(6, " Category ");
    \u0275\u0275elementStart(7, "select", 84)(8, "option", 85);
    \u0275\u0275text(9, "Select category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ExpensesPage_div_62_div_16_option_10_Template, 2, 2, "option", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "label", 74);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275element(14, "input", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 88);
    \u0275\u0275text(16, " Description (optional) ");
    \u0275\u0275element(17, "input", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 74);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "select", 90);
    \u0275\u0275template(22, ExpensesPage_div_62_div_16_option_22_Template, 2, 2, "option", 86);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.lineForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.categories());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 5, "common.amount"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 7, "common.paymentMethod"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
  }
}
function ExpensesPage_div_62_div_17_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 41)(1, "td", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 43);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 62);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 44)(11, "button", 97);
    \u0275\u0275listener("click", function ExpensesPage_div_62_div_17_tr_19_Template_button_click_11_listener() {
      const idx_r18 = \u0275\u0275restoreView(_r17).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeLine(idx_r18));
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.categoryName(l_r19.categoryId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r19.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, l_r19.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r19.paymentMethod);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 7, "common.remove"));
  }
}
function ExpensesPage_div_62_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "table", 20)(3, "thead", 21)(4, "tr")(5, "th", 22);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 22);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 23);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 22);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "th", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, ExpensesPage_div_62_div_17_tr_19_Template, 14, 9, "tr", 96);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "common.category"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "common.description"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, "common.amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "common.payment"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.lines());
  }
}
function ExpensesPage_div_62_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function ExpensesPage_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275listener("click", function ExpensesPage_div_62_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 29)(3, "div", 70);
    \u0275\u0275listener("click", function ExpensesPage_div_62_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 0)(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 71);
    \u0275\u0275listener("click", function ExpensesPage_div_62_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 72)(10, "div", 73)(11, "label", 74);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275element(14, "input", 75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, ExpensesPage_div_62_div_15_Template, 27, 15, "div", 76)(16, ExpensesPage_div_62_div_16_Template, 23, 9, "div", 76)(17, ExpensesPage_div_62_div_17_Template, 20, 13, "div", 77)(18, ExpensesPage_div_62_div_18_Template, 2, 1, "div", 17);
    \u0275\u0275elementStart(19, "div", 78)(20, "button", 79);
    \u0275\u0275listener("click", function ExpensesPage_div_62_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275text(21, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 80);
    \u0275\u0275listener("click", function ExpensesPage_div_62_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.editingId() ? "Edit Expense" : "Add Expenses");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.headerForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 10, "common.date"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.editingId());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingId());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lines().length && !ctx_r1.editingId());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? \u0275\u0275pipeBind1(24, 12, "common.saving") : \u0275\u0275pipeBind1(25, 14, "common.save"), " ");
  }
}
var ExpensesPage = class _ExpensesPage {
  gql;
  perm = inject(PermissionService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : []);
  expenses = signal([], ...ngDevMode ? [{ debugName: "expenses" }] : []);
  detailsDate = signal(null, ...ngDevMode ? [{ debugName: "detailsDate" }] : []);
  selectedDay = signal("", ...ngDevMode ? [{ debugName: "selectedDay" }] : []);
  selectedMonth = signal("", ...ngDevMode ? [{ debugName: "selectedMonth" }] : []);
  selectedYear = signal("", ...ngDevMode ? [{ debugName: "selectedYear" }] : []);
  activeFilter = signal(null, ...ngDevMode ? [{ debugName: "activeFilter" }] : []);
  dialogOpen = signal(false, ...ngDevMode ? [{ debugName: "dialogOpen" }] : []);
  editingId = signal(null, ...ngDevMode ? [{ debugName: "editingId" }] : []);
  confirmDeleteOpen = signal(false, ...ngDevMode ? [{ debugName: "confirmDeleteOpen" }] : []);
  pendingDeleteExpenseId = signal(null, ...ngDevMode ? [{ debugName: "pendingDeleteExpenseId" }] : []);
  paymentMethods = [
    { key: "CASH", label: "Cash" },
    { key: "MPESA", label: "M-Pesa" },
    { key: "BANK", label: "Bank" }
  ];
  fb = inject(FormBuilder);
  branchCtx = inject(BranchContext);
  headerForm = this.fb.group({
    date: ["", [Validators.required]]
  });
  lineForm = this.fb.group({
    categoryId: ["", [Validators.required]],
    description: [""],
    amount: [null, [Validators.required, Validators.min(0)]],
    paymentMethod: ["CASH", [Validators.required]]
  });
  lines = signal([], ...ngDevMode ? [{ debugName: "lines" }] : []);
  categoryById = computed(() => {
    const map = /* @__PURE__ */ new Map();
    for (const c of this.categories()) {
      map.set(String(c.id), c);
    }
    return map;
  }, ...ngDevMode ? [{ debugName: "categoryById" }] : []);
  categoryName(categoryId) {
    const id = String(categoryId ?? "");
    return this.categoryById().get(id)?.name ?? "-";
  }
  filteredExpenses = computed(() => {
    const mode = this.activeFilter();
    const all = this.expenses();
    if (!mode)
      return all;
    if (mode === "day") {
      const d = String(this.selectedDay() ?? "").trim();
      if (!d)
        return all;
      return all.filter((e) => String(e.date ?? "") === d);
    }
    if (mode === "month") {
      const m = String(this.selectedMonth() ?? "").trim();
      if (!m)
        return all;
      const prefix2 = `${m}-`;
      return all.filter((e) => String(e.date ?? "").startsWith(prefix2));
    }
    const y = String(this.selectedYear() ?? "").trim();
    if (!y)
      return all;
    const prefix = `${y}-`;
    return all.filter((e) => String(e.date ?? "").startsWith(prefix));
  }, ...ngDevMode ? [{ debugName: "filteredExpenses" }] : []);
  groupedByDay = computed(() => {
    const groups = /* @__PURE__ */ new Map();
    for (const e of this.filteredExpenses()) {
      const d = String(e.date ?? "");
      if (!groups.has(d))
        groups.set(d, []);
      groups.get(d).push(e);
    }
    const items = Array.from(groups.entries()).map(([date, list]) => {
      const total = list.reduce((sum, x) => sum + Number(x.amount ?? 0), 0);
      return {
        date,
        count: list.length,
        total,
        items: [...list].sort((a, b) => String(b.createdAt ?? "").localeCompare(String(a.createdAt ?? "")))
      };
    });
    items.sort((a, b) => String(b.date).localeCompare(String(a.date)));
    return items;
  }, ...ngDevMode ? [{ debugName: "groupedByDay" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  displayedGroups = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.groupedByDay().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedGroups" }] : []);
  toggleDetails(date) {
    const d = String(date);
    this.detailsDate.set(this.detailsDate() === d ? null : d);
  }
  dailyTotal(date) {
    const g = this.groupedByDay().find((x) => x.date === date);
    return Number(g?.total ?? 0);
  }
  totalToday = computed(() => {
    const d = String(this.selectedDay() ?? "").trim();
    if (!d)
      return 0;
    return this.expenses().filter((e) => String(e.date ?? "") === d).reduce((sum, e) => sum + Number(e.amount ?? 0), 0);
  }, ...ngDevMode ? [{ debugName: "totalToday" }] : []);
  totalThisMonth = computed(() => {
    const m = String(this.selectedMonth() ?? "").trim();
    if (!m)
      return 0;
    const prefix = `${m}-`;
    return this.expenses().filter((e) => String(e.date ?? "").startsWith(prefix)).reduce((sum, e) => sum + Number(e.amount ?? 0), 0);
  }, ...ngDevMode ? [{ debugName: "totalThisMonth" }] : []);
  totalThisYear = computed(() => {
    const y = String(this.selectedYear() ?? "").trim();
    if (!y)
      return 0;
    const prefix = `${y}-`;
    return this.expenses().filter((e) => String(e.date ?? "").startsWith(prefix)).reduce((sum, e) => sum + Number(e.amount ?? 0), 0);
  }, ...ngDevMode ? [{ debugName: "totalThisYear" }] : []);
  applyDayFilter() {
    this.activeFilter.set("day");
    this.detailsDate.set(null);
  }
  applyMonthFilter() {
    this.activeFilter.set("month");
    this.detailsDate.set(null);
  }
  applyYearFilter() {
    this.activeFilter.set("year");
    this.detailsDate.set(null);
  }
  onSelectedDayChange(value) {
    this.selectedDay.set(String(value ?? ""));
    this.activeFilter.set(String(value ?? "").trim() ? "day" : null);
    this.detailsDate.set(null);
  }
  onSelectedMonthChange(value) {
    this.selectedMonth.set(String(value ?? ""));
    this.activeFilter.set(String(value ?? "").trim() ? "month" : null);
    this.detailsDate.set(null);
  }
  onSelectedYearChange(value) {
    this.selectedYear.set(String(value ?? ""));
    this.activeFilter.set(String(value ?? "").trim() ? "year" : null);
    this.detailsDate.set(null);
  }
  clearFilter() {
    this.activeFilter.set(null);
    this.detailsDate.set(null);
  }
  constructor(gql) {
    this.gql = gql;
    this.perm.load();
    const now = /* @__PURE__ */ new Date();
    const yyyy = String(now.getFullYear());
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    this.selectedDay.set(this.todayIso());
    this.selectedMonth.set(`${yyyy}-${mm}`);
    this.selectedYear.set(yyyy);
    this.loadCategories();
    this.load();
  }
  resetLineForm() {
    this.lineForm.reset({
      categoryId: this.categories()[0]?.id ?? "",
      description: "",
      amount: null,
      paymentMethod: "CASH"
    });
  }
  addLine() {
    if (this.editingId())
      return;
    this.lineForm.markAllAsTouched();
    if (this.lineForm.invalid)
      return;
    const v = this.lineForm.getRawValue();
    this.lines.set([
      ...this.lines(),
      {
        categoryId: String(v.categoryId ?? ""),
        description: String(v.description ?? ""),
        amount: Number(v.amount ?? 0),
        paymentMethod: String(v.paymentMethod ?? "CASH")
      }
    ]);
    this.resetLineForm();
  }
  removeLine(i) {
    if (this.editingId())
      return;
    const next = [...this.lines()];
    next.splice(i, 1);
    this.lines.set(next);
  }
  todayIso() {
    const d = /* @__PURE__ */ new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  loadCategories() {
    const query = `query ExpenseCategories($filter: ExpenseCategoryFilter) {
      expenseCategories(filter: $filter) { id name active }
    }`;
    this.gql.request(query, { filter: { active: true } }).subscribe({
      next: (res) => this.categories.set((res.expenseCategories ?? []).filter((c) => c.active)),
      error: () => this.categories.set([])
    });
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const query = `query Expenses($filter: ExpenseFilter) {
      expenses(filter: $filter) {
        id
        date
        description
        amount
        paymentMethod
        createdAt
        createdBy
        category { id name active }
      }
    }`;
    this.gql.request(query, { filter: { branch: this.branchCtx.effective() } }).subscribe({
      next: (res) => {
        this.expenses.set(res.expenses ?? []);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load expenses");
        this.loading.set(false);
      }
    });
  }
  openCreate() {
    this.error.set(null);
    this.editingId.set(null);
    this.headerForm.reset({ date: this.todayIso() });
    this.lines.set([]);
    this.resetLineForm();
    this.dialogOpen.set(true);
  }
  openEdit(e) {
    this.error.set(null);
    this.editingId.set(String(e.id));
    this.headerForm.reset({ date: e.date });
    const l = {
      categoryId: String(e.category?.id ?? ""),
      description: String(e.description ?? ""),
      amount: Number(e.amount ?? 0),
      paymentMethod: String(e.paymentMethod ?? "CASH").toUpperCase()
    };
    this.lines.set([l]);
    this.lineForm.reset(l);
    this.dialogOpen.set(true);
  }
  closeDialog() {
    this.dialogOpen.set(false);
    this.editingId.set(null);
  }
  openDeleteConfirm(e) {
    this.pendingDeleteExpenseId.set(String(e.id));
    this.confirmDeleteOpen.set(true);
  }
  cancelDeleteConfirm() {
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteExpenseId.set(null);
  }
  confirmDelete() {
    const id = this.pendingDeleteExpenseId();
    if (!id)
      return;
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteExpenseId.set(null);
    this.deleteExpense(id);
  }
  save() {
    this.headerForm.markAllAsTouched();
    const id = this.editingId();
    if (id) {
      this.lineForm.markAllAsTouched();
      if (this.headerForm.invalid || this.lineForm.invalid)
        return;
    } else {
      if (this.headerForm.invalid)
        return;
      if (!this.lines().length) {
        this.error.set("Add at least one line");
        return;
      }
    }
    this.loading.set(true);
    this.error.set(null);
    const header = this.headerForm.getRawValue();
    const date = String(header.date ?? "").trim();
    if (!id) {
      const mutation2 = `mutation CreateExpense($input: CreateExpenseInput!) {
        createExpense(input: $input) { id }
      }`;
      const requests = (this.lines() ?? []).map((l) => this.gql.request(mutation2, {
        input: {
          date,
          categoryId: l.categoryId,
          description: l.description || null,
          amount: Number(l.amount ?? 0),
          paymentMethod: l.paymentMethod,
          branch: this.branchCtx.writeBranch()
        }
      }));
      forkJoin(requests).subscribe({
        next: () => {
          this.closeDialog();
          this.load();
        },
        error: (e) => {
          this.error.set(e instanceof Error ? e.message : "Failed to create expenses");
          this.loading.set(false);
        }
      });
      return;
    }
    const v = this.lineForm.getRawValue();
    const input = {
      date,
      categoryId: v.categoryId,
      description: v.description || null,
      amount: Number(v.amount ?? 0),
      paymentMethod: v.paymentMethod
    };
    const mutation = `mutation UpdateExpense($input: UpdateExpenseInput!) {
      updateExpense(input: $input) { id }
    }`;
    this.gql.request(mutation, { input: __spreadValues({ id }, input) }).subscribe({
      next: () => {
        this.closeDialog();
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to update expense");
        this.loading.set(false);
      }
    });
  }
  deleteExpense(id) {
    this.loading.set(true);
    this.error.set(null);
    const mutation = `mutation DeleteExpense($input: DeleteExpenseInput!) { deleteExpense(input: $input) }`;
    this.gql.request(mutation, { input: { id } }).subscribe({
      next: () => this.load(),
      error: (err) => {
        this.error.set(err instanceof Error ? err.message : "Failed to delete expense");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function ExpensesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpensesPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpensesPage, selectors: [["cis-expenses-page"]], decls: 63, vars: 41, consts: [[1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "flex", "items-center", "gap-2"], ["class", "rounded-xl bg-pink-500 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70", 3, "disabled", "click", 4, "ngIf"], ["class", "cis-modal-overlay fixed inset-0 z-50", 4, "ngIf"], [1, "mt-4", "grid", "grid-cols-1", "gap-3", "sm:grid-cols-3"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-xs", "font-semibold", "text-slate-500", "dark:text-slate-400"], [1, "mt-1", "text-lg", "font-extrabold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "grid", "gap-2"], ["type", "date", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "input", "value"], ["type", "month", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "input", "value"], ["type", "number", "min", "2000", "max", "2100", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100", 3, "input", "value"], ["class", "mt-3 flex flex-wrap items-center justify-between gap-2", 4, "ngIf"], [1, "mt-4", "grid", "grid-cols-1", "gap-4"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], [4, "ngFor", "ngForOf"], ["class", "border-t border-slate-100", 4, "ngIf"], [1, "rounded-xl", "bg-pink-500", "px-3", "py-2", "text-xs", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "cis-modal-overlay", "fixed", "inset-0", "z-50"], [1, "absolute", "inset-0", "bg-slate-900/40", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-sm", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "mt-2", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "mt-5", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-[#B81104]", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-[#7f0c03]", 3, "click"], [1, "mt-3", "flex", "flex-wrap", "items-center", "justify-between", "gap-2"], [1, "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-400"], ["class", "text-slate-900 dark:text-slate-100", 4, "ngIf"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "text-xs", "text-slate-700", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right"], ["type", "button", 1, "cis-row-action", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["class", "border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/50", 4, "ngIf"], [1, "border-t", "border-slate-100", "dark:border-slate-700", "bg-slate-50/50", "dark:bg-slate-700/50"], ["colspan", "4", 1, "px-3", "py-3"], [1, "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-300"], [1, "inline-flex", "items-center", "rounded-full", "bg-pink-50", "dark:bg-pink-900/30", "px-2.5", "py-1", "text-[11px]", "font-semibold", "text-pink-700", "dark:text-pink-300", "ring-1", "ring-inset", "ring-pink-200", "dark:ring-pink-700"], [1, "mt-2", "overflow-auto", "rounded-xl", "bg-white", "dark:bg-slate-800", "ring-1", "ring-indigo-100", "dark:ring-pink-700", "border", "border-indigo-100", "dark:border-indigo-700"], [1, "w-full", "border-collapse", "text-xs"], [1, "bg-pink-50", "dark:bg-pink-900/30"], [1, "px-3", "py-2", "text-left", "font-semibold", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-right", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-indigo-100 dark:border-indigo-700", 4, "ngFor", "ngForOf"], [1, "border-t", "border-indigo-100", "dark:border-indigo-700"], [1, "px-3", "py-2", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], ["class", "cis-row-action", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "cis-row-action cis-row-action-danger", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["type", "button", 1, "cis-row-action", "cis-row-action-danger", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "border-t", "border-slate-100"], ["colspan", "4", 1, "px-3", "py-6", "text-center", "text-sm", "text-slate-600"], [1, "w-full", "max-w-2xl", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], [1, "mt-4", "grid", "gap-3", 3, "formGroup"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], ["type", "date", "formControlName", "date", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["class", "mt-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3 ring-1 ring-slate-100 dark:ring-slate-600", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], [1, "mt-4", "flex", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], ["type", "button", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-pink-600", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "mt-4", "rounded-xl", "bg-slate-50", "dark:bg-slate-700/50", "p-3", "ring-1", "ring-slate-100", "dark:ring-slate-600"], [1, "text-sm", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "mt-3", "grid", "gap-3", 3, "ngSubmit", "formGroup"], ["formControlName", "categoryId", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "amount", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300", "sm:col-span-2"], ["formControlName", "description", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["formControlName", "paymentMethod", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["type", "submit", 1, "w-28", "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white"], [3, "value"], [1, "mt-4"], [1, "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "px-3", "py-2"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], ["type", "button", 1, "text-xs", "font-semibold", "text-[#B81104]", "dark:text-red-400", 3, "click"]], template: function ExpensesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Expenses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275template(4, ExpensesPage_button_4_Template, 3, 4, "button", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, ExpensesPage_div_5_Template, 14, 3, "div", 4);
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
      \u0275\u0275text(9, "Today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "input", 10);
      \u0275\u0275listener("input", function ExpensesPage_Template_input_input_14_listener($event) {
        return ctx.onSelectedDayChange($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 6)(16, "div", 7);
      \u0275\u0275text(17, "This Month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 9)(22, "input", 11);
      \u0275\u0275listener("input", function ExpensesPage_Template_input_input_22_listener($event) {
        return ctx.onSelectedMonthChange($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 6)(24, "div", 7);
      \u0275\u0275text(25, "This Year");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 8);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 9)(30, "input", 12);
      \u0275\u0275listener("input", function ExpensesPage_Template_input_input_30_listener($event) {
        return ctx.onSelectedYearChange($event.target.value);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(31, ExpensesPage_div_31_Template, 8, 4, "div", 13);
      \u0275\u0275elementStart(32, "div", 14)(33, "section", 6)(34, "div", 0)(35, "h3", 15);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 16);
      \u0275\u0275listener("click", function ExpensesPage_Template_button_click_38_listener() {
        return ctx.load();
      });
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(41, ExpensesPage_div_41_Template, 2, 1, "div", 17);
      \u0275\u0275elementStart(42, "cis-pager", 18);
      \u0275\u0275twoWayListener("pageSizeChange", function ExpensesPage_Template_cis_pager_pageSizeChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      })("pageIndexChange", function ExpensesPage_Template_cis_pager_pageIndexChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 19)(44, "table", 20)(45, "thead", 21)(46, "tr")(47, "th", 22);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 23);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 23);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 23);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "tbody");
      \u0275\u0275template(60, ExpensesPage_ng_container_60_Template, 17, 8, "ng-container", 24)(61, ExpensesPage_tr_61_Template, 3, 0, "tr", 25);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(62, ExpensesPage_div_62_Template, 26, 16, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.perm.canCreate("EXPENSES"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.confirmDeleteOpen());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 23, ctx.totalToday()));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.selectedDay());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 25, ctx.totalThisMonth()));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.selectedMonth());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 27, ctx.totalThisYear()));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.selectedYear());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeFilter());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 29, "common.list"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 31, "common.refresh"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("total", ctx.groupedByDay().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 33, "common.date"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 35, "common.lines"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 37, "common.total"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 39, "common.actions"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedGroups());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.groupedByDay().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dialogOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RowActionsMenuComponent, PagerComponent, MoneyPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpensesPage, [{
    type: Component,
    args: [{ selector: "cis-expenses-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, MoneyPipe, TranslatePipe, RowActionsMenuComponent, PagerComponent], template: `<div class="flex items-center justify-between">\r
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Expenses</h2>\r
  <div class="flex items-center gap-2">\r
    <button\r
      *ngIf="perm.canCreate('EXPENSES')"\r
      class="rounded-xl bg-pink-500 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
      (click)="openCreate()"\r
      [disabled]="loading()"\r
    >\r
      {{ 'common.add' | translate }} Expense\r
    </button>\r
  </div>\r
</div>\r
\r
<div *ngIf="confirmDeleteOpen()" class="cis-modal-overlay fixed inset-0 z-50">\r
  <div class="absolute inset-0 bg-slate-900/40" (click)="cancelDeleteConfirm()"></div>\r
  <div class="absolute inset-0 flex items-center justify-center p-4">\r
    <div\r
      class="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.delete' | translate }} expense?</div>\r
      <div class="mt-2 text-sm text-slate-600 dark:text-slate-400">\r
        Are you sure you want to delete this expense? This action cannot be undone.\r
      </div>\r
\r
      <div class="mt-5 flex items-center justify-end gap-2">\r
        <button\r
          type="button"\r
          class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"\r
          (click)="cancelDeleteConfirm()"\r
        >\r
          Cancel\r
        </button>\r
        <button\r
          type="button"\r
          class="rounded-xl bg-[#B81104] px-4 py-2 text-sm font-semibold text-white hover:bg-[#7f0c03]"\r
          (click)="confirmDelete()"\r
        >\r
          Delete\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">\r
  <div class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">Today</div>\r
    <div class="mt-1 text-lg font-extrabold text-slate-900 dark:text-slate-100">{{ totalToday() | money}}</div>\r
    <div class="mt-3 grid gap-2">\r
      <input\r
        class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"\r
        type="date"\r
        [value]="selectedDay()"\r
        (input)="onSelectedDayChange($any($event.target).value)"\r
      />\r
    </div>\r
  </div>\r
  <div class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">This Month</div>\r
    <div class="mt-1 text-lg font-extrabold text-slate-900 dark:text-slate-100">{{ totalThisMonth() | money}}</div>\r
    <div class="mt-3 grid gap-2">\r
      <input\r
        class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"\r
        type="month"\r
        [value]="selectedMonth()"\r
        (input)="onSelectedMonthChange($any($event.target).value)"\r
      />\r
    </div>\r
  </div>\r
  <div class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="text-xs font-semibold text-slate-500 dark:text-slate-400">This Year</div>\r
    <div class="mt-1 text-lg font-extrabold text-slate-900 dark:text-slate-100">{{ totalThisYear() | money}}</div>\r
    <div class="mt-3 grid gap-2">\r
      <input\r
        class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"\r
        type="number"\r
        min="2000"\r
        max="2100"\r
        [value]="selectedYear()"\r
        (input)="onSelectedYearChange($any($event.target).value)"\r
      />\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="mt-3 flex flex-wrap items-center justify-between gap-2" *ngIf="activeFilter()">\r
  <div class="text-xs font-semibold text-slate-600 dark:text-slate-400">\r
    Filter:\r
    <span class="text-slate-900 dark:text-slate-100" *ngIf="activeFilter() === 'day'">Day ({{ selectedDay() }})</span>\r
    <span class="text-slate-900 dark:text-slate-100" *ngIf="activeFilter() === 'month'">Month ({{ selectedMonth() }})</span>\r
    <span class="text-slate-900 dark:text-slate-100" *ngIf="activeFilter() === 'year'">Year ({{ selectedYear() }})</span>\r
  </div>\r
  <button\r
    type="button"\r
    class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70"\r
    (click)="clearFilter()"\r
    [disabled]="loading()"\r
  >\r
    Clear filter\r
  </button>\r
</div>\r
\r
<div class="mt-4 grid grid-cols-1 gap-4">\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="flex items-center justify-between">\r
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.list' | translate }}</h3>\r
      <button\r
        class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70"\r
        (click)="load()"\r
        [disabled]="loading()"\r
      >\r
        {{ 'common.refresh' | translate }}\r
      </button>\r
    </div>\r
\r
    <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
\r
    <cis-pager class="mt-3 block" [total]="groupedByDay().length" [(pageSize)]="pageSize" [(pageIndex)]="pageIndex" />\r
\r
    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
      <table class="w-full border-collapse text-sm">\r
        <thead class="bg-slate-50 dark:bg-slate-700">\r
          <tr>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.date' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.lines' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.total' | translate }}</th>\r
            <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <ng-container *ngFor="let g of displayedGroups()">\r
            <tr class="border-t border-slate-100 dark:border-slate-700">\r
              <td class="px-3 py-2 text-xs text-slate-700 dark:text-slate-300">{{ g.date }}</td>\r
              <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ g.count }}</td>\r
              <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ g.total | money}}</td>\r
              <td class="px-3 py-2 text-right">\r
                <cis-row-actions>\r
                  <button\r
                    class="cis-row-action"\r
                    type="button"\r
                    (click)="toggleDetails(g.date)"\r
                    [disabled]="loading()"\r
                  >\r
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>\r
                    {{ detailsDate() === g.date ? 'Hide details' : 'Details' }}\r
                  </button>\r
                </cis-row-actions>\r
              </td>\r
            </tr>\r
\r
            <tr *ngIf="detailsDate() === g.date" class="border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/50">\r
              <td class="px-3 py-3" colspan="4">\r
                <div class="text-xs font-semibold text-slate-700 dark:text-slate-300">\r
                  <span class="inline-flex items-center rounded-full bg-pink-50 dark:bg-pink-900/30 px-2.5 py-1 text-[11px] font-semibold text-pink-700 dark:text-pink-300 ring-1 ring-inset ring-pink-200 dark:ring-pink-700">Expense details</span>\r
                </div>\r
                <div class="mt-2 overflow-auto rounded-xl bg-white dark:bg-slate-800 ring-1 ring-indigo-100 dark:ring-pink-700 border border-indigo-100 dark:border-indigo-700">\r
                  <table class="w-full border-collapse text-xs">\r
                    <thead class="bg-pink-50 dark:bg-pink-900/30">\r
                      <tr>\r
                        <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.category' | translate }}</th>\r
                        <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.description' | translate }}</th>\r
                        <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.amount' | translate }}</th>\r
                        <th class="px-3 py-2 text-left font-semibold text-slate-600 dark:text-slate-300">{{ 'common.payment' | translate }}</th>\r
                        <th class="px-3 py-2 text-right font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>\r
                      </tr>\r
                    </thead>\r
                    <tbody>\r
                      <tr *ngFor="let e of g.items" class="border-t border-indigo-100 dark:border-indigo-700">\r
                        <td class="px-3 py-2 font-semibold text-slate-900 dark:text-slate-300">{{ e.category?.name || '-' }}</td>\r
                        <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ e.description || '-' }}</td>\r
                        <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ e.amount | money}}</td>\r
                        <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ e.paymentMethod }}</td>\r
                        <td class="px-3 py-2 text-right">\r
                          <cis-row-actions>\r
                            <button\r
                              *ngIf="perm.canEdit('EXPENSES')"\r
                              class="cis-row-action"\r
                              type="button"\r
                              (click)="openEdit(e)"\r
                              [disabled]="loading()"\r
                            >\r
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>\r
                              {{ 'common.edit' | translate }}\r
                            </button>\r
                            <button\r
                              *ngIf="perm.canDelete('EXPENSES')"\r
                              class="cis-row-action cis-row-action-danger"\r
                              type="button"\r
                              (click)="openDeleteConfirm(e)"\r
                              [disabled]="loading()"\r
                            >\r
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>\r
                              {{ 'common.delete' | translate }}\r
                            </button>\r
                          </cis-row-actions>\r
                        </td>\r
                      </tr>\r
                    </tbody>\r
                  </table>\r
                </div>\r
              </td>\r
            </tr>\r
          </ng-container>\r
\r
          <tr *ngIf="!groupedByDay().length" class="border-t border-slate-100">\r
            <td class="px-3 py-6 text-center text-sm text-slate-600" colspan="4">No expenses</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </section>\r
</div>\r
\r
<div *ngIf="dialogOpen()" class="cis-modal-overlay fixed inset-0 z-50">\r
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeDialog()"></div>\r
  <div class="absolute inset-0 flex items-center justify-center p-4">\r
    <div class="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">\r
      <div class="flex items-center justify-between">\r
        <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ editingId() ? ('Edit Expense') : ('Add Expenses') }}</div>\r
        <button class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200" type="button" (click)="closeDialog()">\u2715</button>\r
      </div>\r
\r
      <div class="mt-4 grid gap-3" [formGroup]="headerForm">\r
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
          <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
            {{ 'common.date' | translate }}\r
            <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="date" formControlName="date" />\r
          </label>\r
        </div>\r
      </div>\r
\r
      <div class="mt-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3 ring-1 ring-slate-100 dark:ring-slate-600" *ngIf="!editingId()">\r
        <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ 'common.addLine' | translate }}</div>\r
        <form class="mt-3 grid gap-3" [formGroup]="lineForm" (ngSubmit)="addLine()">\r
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
            <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
              Category\r
              <select class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="categoryId">\r
                <option value="">Select category</option>\r
                <option *ngFor="let c of categories()" [value]="c.id">{{ c.name }}</option>\r
              </select>\r
            </label>\r
\r
            <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
              {{ 'common.amount' | translate }}\r
              <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="number" formControlName="amount" />\r
            </label>\r
\r
            <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300 sm:col-span-2">\r
              Description (optional)\r
              <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="description" />\r
            </label>\r
\r
            <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
              {{ 'common.paymentMethod' | translate }}\r
              <select class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="paymentMethod">\r
                <option *ngFor="let p of paymentMethods" [value]="p.key">{{ p.label }}</option>\r
              </select>\r
            </label>\r
          </div>\r
\r
          <button class="w-28 rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white" type="submit">\r
            {{ 'common.addLine' | translate }}\r
          </button>\r
        </form>\r
      </div>\r
\r
      <div class="mt-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3 ring-1 ring-slate-100 dark:ring-slate-600" *ngIf="editingId()">\r
        <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">Expense</div>\r
        <form class="mt-3 grid gap-3" [formGroup]="lineForm" (ngSubmit)="save()">\r
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
            <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
              Category\r
              <select class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="categoryId">\r
                <option value="">Select category</option>\r
                <option *ngFor="let c of categories()" [value]="c.id">{{ c.name }}</option>\r
              </select>\r
            </label>\r
\r
            <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
              {{ 'common.amount' | translate }}\r
              <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" type="number" formControlName="amount" />\r
            </label>\r
\r
            <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300 sm:col-span-2">\r
              Description (optional)\r
              <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="description" />\r
            </label>\r
\r
            <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
              {{ 'common.paymentMethod' | translate }}\r
              <select class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="paymentMethod">\r
                <option *ngFor="let p of paymentMethods" [value]="p.key">{{ p.label }}</option>\r
              </select>\r
            </label>\r
          </div>\r
        </form>\r
      </div>\r
\r
      <div class="mt-4" *ngIf="lines().length && !editingId()">\r
        <div class="overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
          <table class="w-full border-collapse text-sm">\r
            <thead class="bg-slate-50 dark:bg-slate-700">\r
              <tr>\r
                <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.category' | translate }}</th>\r
                <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.description' | translate }}</th>\r
                <th class="px-3 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.amount' | translate }}</th>\r
                <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.payment' | translate }}</th>\r
                <th class="px-3 py-2"></th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let l of lines(); let idx = index" class="border-t border-slate-100 dark:border-slate-700">\r
                <td class="px-3 py-2 font-semibold text-slate-900 dark:text-slate-300">{{ categoryName(l.categoryId) }}</td>\r
                <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ l.description || '-' }}</td>\r
                <td class="px-3 py-2 text-right font-semibold text-slate-900 dark:text-slate-300">{{ l.amount | money}}</td>\r
                <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ l.paymentMethod }}</td>\r
                <td class="px-3 py-2 text-right">\r
                  <button class="text-xs font-semibold text-[#B81104] dark:text-red-400" type="button" (click)="removeLine(idx)">{{ 'common.remove' | translate }}</button>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
\r
      <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
\r
      <div class="mt-4 flex justify-end gap-2">\r
        <button\r
          class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70"\r
          type="button"\r
          (click)="closeDialog()"\r
          [disabled]="loading()"\r
        >\r
          Cancel\r
        </button>\r
        <button\r
          class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-70"\r
          type="button"\r
          (click)="save()"\r
          [disabled]="loading()"\r
        >\r
          {{ loading() ? ('common.saving' | translate) : ('common.save' | translate) }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: GraphqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpensesPage, { className: "ExpensesPage", filePath: "app/features/expenses/expenses.page.ts", lineNumber: 57 });
})();

// src/app/features/expense-categories/expense-categories.page.ts
function ExpenseCategoriesPage_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ExpenseCategoriesPage_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 3, "common.add"), " ", \u0275\u0275pipeBind1(3, 5, "common.category"), " ");
  }
}
function ExpenseCategoriesPage_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275listener("click", function ExpenseCategoriesPage_div_6_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteConfirm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 20)(3, "div", 21);
    \u0275\u0275listener("click", function ExpenseCategoriesPage_div_6_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23)(12, "button", 24);
    \u0275\u0275listener("click", function ExpenseCategoriesPage_div_6_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteConfirm());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 25);
    \u0275\u0275listener("click", function ExpenseCategoriesPage_div_6_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 5, "common.delete"), " ", \u0275\u0275pipeBind1(7, 7, "common.category"), "?");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "common.deleteConfirm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 11, "common.cancel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, "common.delete"), " ");
  }
}
function ExpenseCategoriesPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function ExpenseCategoriesPage_tr_35_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ExpenseCategoriesPage_tr_35_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const c_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit(c_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 35);
    \u0275\u0275element(2, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.edit"), " ");
  }
}
function ExpenseCategoriesPage_tr_35_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ExpenseCategoriesPage_tr_35_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(c_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 35);
    \u0275\u0275element(2, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.delete"), " ");
  }
}
function ExpenseCategoriesPage_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 27)(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 30)(6, "span", 31);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 30)(11, "cis-row-actions");
    \u0275\u0275template(12, ExpenseCategoriesPage_tr_35_button_12_Template, 5, 4, "button", 32)(13, ExpenseCategoriesPage_tr_35_button_13_Template, 5, 4, "button", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-[#B81104]", !c_r5.active)("dark\\:text-red-400", !c_r5.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.active ? \u0275\u0275pipeBind1(8, 9, "common.active") : \u0275\u0275pipeBind1(9, 11, "common.inactive"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.perm.canEdit("EXPENSE_CATEGORIES"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.perm.canDelete("EXPENSE_CATEGORIES"));
  }
}
function ExpenseCategoriesPage_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 27)(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.noData"));
  }
}
function ExpenseCategoriesPage_div_37_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function ExpenseCategoriesPage_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275listener("click", function ExpenseCategoriesPage_div_37_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 20)(3, "div", 40);
    \u0275\u0275listener("click", function ExpenseCategoriesPage_div_37_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "div", 41)(5, "div")(6, "div", 7);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 42);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 43);
    \u0275\u0275listener("click", function ExpenseCategoriesPage_div_37_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275text(15, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "form", 44);
    \u0275\u0275listener("ngSubmit", function ExpenseCategoriesPage_div_37_Template_form_ngSubmit_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(17, "label", 45);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275element(20, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 45);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275element(24, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 45);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementStart(28, "select", 48)(29, "option", 49);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 49);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, ExpenseCategoriesPage_div_37_div_35_Template, 2, 1, "div", 50);
    \u0275\u0275elementStart(36, "div", 51)(37, "button", 24);
    \u0275\u0275listener("click", function ExpenseCategoriesPage_div_37_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 52);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.editingId() ? \u0275\u0275pipeBind1(8, 15, "common.edit") : \u0275\u0275pipeBind1(9, 17, "common.add"), " ", \u0275\u0275pipeBind1(10, 19, "common.category"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 21, "expenseCategories.manage"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 23, "common.name"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 25, "common.description"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 27, "common.status"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 29, "common.active"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 31, "common.inactive"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 33, "common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? \u0275\u0275pipeBind1(42, 35, "common.saving") : \u0275\u0275pipeBind1(43, 37, "common.save"), " ");
  }
}
var ExpenseCategoriesPage = class _ExpenseCategoriesPage {
  gql;
  perm = inject(PermissionService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  pageIndex = signal(0, ...ngDevMode ? [{ debugName: "pageIndex" }] : []);
  displayedCategories = computed(() => {
    const size = this.pageSize();
    const start = this.pageIndex() * size;
    return this.categories().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "displayedCategories" }] : []);
  dialogOpen = signal(false, ...ngDevMode ? [{ debugName: "dialogOpen" }] : []);
  editingId = signal(null, ...ngDevMode ? [{ debugName: "editingId" }] : []);
  confirmDeleteOpen = signal(false, ...ngDevMode ? [{ debugName: "confirmDeleteOpen" }] : []);
  pendingDeleteCategoryId = signal(null, ...ngDevMode ? [{ debugName: "pendingDeleteCategoryId" }] : []);
  fb = inject(FormBuilder);
  form = this.fb.group({
    name: ["", [Validators.required]],
    description: [""],
    active: [true, [Validators.required]]
  });
  constructor(gql) {
    this.gql = gql;
    this.perm.load();
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    const query = `query ExpenseCategories($filter: ExpenseCategoryFilter) {
      expenseCategories(filter: $filter) { id name description active }
    }`;
    this.gql.request(query, { filter: null }).subscribe({
      next: (res) => {
        this.categories.set(res.expenseCategories ?? []);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to load categories");
        this.loading.set(false);
      }
    });
  }
  openCreate() {
    this.error.set(null);
    this.editingId.set(null);
    this.form.reset({ name: "", description: "", active: true });
    this.dialogOpen.set(true);
  }
  openEdit(c) {
    this.error.set(null);
    this.editingId.set(String(c.id));
    this.form.reset({
      name: c.name,
      description: c.description ?? "",
      active: Boolean(c.active)
    });
    this.dialogOpen.set(true);
  }
  closeDialog() {
    this.dialogOpen.set(false);
    this.editingId.set(null);
  }
  openDeleteConfirm(c) {
    this.pendingDeleteCategoryId.set(String(c.id));
    this.confirmDeleteOpen.set(true);
  }
  cancelDeleteConfirm() {
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteCategoryId.set(null);
  }
  confirmDelete() {
    const id = this.pendingDeleteCategoryId();
    if (!id)
      return;
    this.confirmDeleteOpen.set(false);
    this.pendingDeleteCategoryId.set(null);
    this.deleteCategory(id);
  }
  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid)
      return;
    this.loading.set(true);
    this.error.set(null);
    const raw = this.form.getRawValue();
    const id = this.editingId();
    if (!id) {
      const mutation2 = `mutation CreateExpenseCategory($input: CreateExpenseCategoryInput!) {
        createExpenseCategory(input: $input) { id }
      }`;
      this.gql.request(mutation2, { input: { name: raw.name, description: raw.description || null } }).subscribe({
        next: () => {
          this.closeDialog();
          this.load();
        },
        error: (e) => {
          this.error.set(e instanceof Error ? e.message : "Failed to create category");
          this.loading.set(false);
        }
      });
      return;
    }
    const mutation = `mutation UpdateExpenseCategory($input: UpdateExpenseCategoryInput!) {
      updateExpenseCategory(input: $input) { id }
    }`;
    this.gql.request(mutation, {
      input: {
        id,
        name: raw.name,
        description: raw.description || null,
        active: raw.active
      }
    }).subscribe({
      next: () => {
        this.closeDialog();
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to update category");
        this.loading.set(false);
      }
    });
  }
  deleteCategory(id) {
    this.loading.set(true);
    this.error.set(null);
    const mutation = `mutation DeleteExpenseCategory($input: DeleteExpenseCategoryInput!) { deleteExpenseCategory(input: $input) }`;
    this.gql.request(mutation, { input: { id } }).subscribe({
      next: () => {
        if (this.editingId() === id) {
          this.editingId.set(null);
        }
        this.load();
      },
      error: (e) => {
        this.error.set(e instanceof Error ? e.message : "Failed to delete category");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function ExpenseCategoriesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpenseCategoriesPage)(\u0275\u0275directiveInject(GraphqlService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpenseCategoriesPage, selectors: [["cis-expense-categories-page"]], decls: 38, vars: 31, consts: [[1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "flex", "items-center", "gap-2"], ["class", "rounded-xl bg-pink-500 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70", 3, "disabled", "click", 4, "ngIf"], ["class", "cis-modal-overlay fixed inset-0 z-50", 4, "ngIf"], [1, "mt-4", "grid", "grid-cols-1", "gap-4"], [1, "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-4", "shadow-sm", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "text-base", "font-semibold", "text-slate-900", "dark:text-slate-100"], [1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-xs", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], ["class", "mt-3 text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-3", "block", 3, "pageSizeChange", "pageIndexChange", "total", "pageSize", "pageIndex"], [1, "mt-3", "overflow-auto", "rounded-xl", "ring-1", "ring-slate-100", "dark:ring-slate-700"], [1, "w-full", "border-collapse", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-700"], [1, "px-3", "py-2", "text-left", "text-xs", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngFor", "ngForOf"], ["class", "border-t border-slate-100 dark:border-slate-700", 4, "ngIf"], [1, "rounded-xl", "bg-pink-500", "px-3", "py-2", "text-xs", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "click", "disabled"], [1, "cis-modal-overlay", "fixed", "inset-0", "z-50"], [1, "absolute", "inset-0", "bg-slate-900/40", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-sm", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "mt-2", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "mt-5", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-4", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", "hover:bg-slate-200", "dark:hover:bg-slate-600", 3, "click"], ["type", "button", 1, "rounded-xl", "bg-[#B81104]", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "hover:bg-[#7f0c03]", 3, "click"], [1, "mt-3", "text-sm", "text-[#B81104]", "dark:text-red-400"], [1, "border-t", "border-slate-100", "dark:border-slate-700"], [1, "px-3", "py-2", "font-semibold", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2", "text-slate-900", "dark:text-slate-300"], [1, "px-3", "py-2"], [1, "text-slate-800", "dark:text-slate-300"], ["class", "cis-row-action", 3, "disabled", "click", 4, "ngIf"], ["class", "cis-row-action cis-row-action-danger", 3, "disabled", "click", 4, "ngIf"], [1, "cis-row-action", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-3.5", "w-3.5", "shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "cis-row-action", "cis-row-action-danger", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], ["colspan", "4", 1, "px-3", "py-6", "text-center", "text-sm", "text-slate-600", "dark:text-slate-400"], [1, "w-full", "max-w-md", "rounded-2xl", "bg-white", "dark:bg-slate-800", "p-5", "shadow-xl", "ring-1", "ring-slate-200", "dark:ring-slate-700", 3, "click"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "mt-1", "text-xs", "text-slate-500", "dark:text-slate-400"], ["type", "button", 1, "rounded-xl", "bg-slate-100", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200", 3, "click"], [1, "mt-4", "grid", "gap-3", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-2", "text-xs", "text-slate-700", "dark:text-slate-300"], ["formControlName", "name", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["formControlName", "description", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], ["formControlName", "active", 1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-600", "bg-white", "dark:bg-slate-700", "px-3", "py-2", "text-sm", "text-slate-900", "dark:text-slate-100"], [3, "ngValue"], ["class", "text-sm text-[#B81104] dark:text-red-400", 4, "ngIf"], [1, "mt-1", "flex", "items-center", "justify-end", "gap-2"], ["type", "submit", 1, "rounded-xl", "bg-pink-500", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "disabled:cursor-not-allowed", "disabled:opacity-70", 3, "disabled"], [1, "text-sm", "text-[#B81104]", "dark:text-red-400"]], template: function ExpenseCategoriesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275template(5, ExpenseCategoriesPage_button_5_Template, 4, 7, "button", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, ExpenseCategoriesPage_div_6_Template, 18, 15, "div", 4);
      \u0275\u0275elementStart(7, "div", 5)(8, "section", 6)(9, "div", 0)(10, "h3", 7);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275listener("click", function ExpenseCategoriesPage_Template_button_click_13_listener() {
        return ctx.load();
      });
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, ExpenseCategoriesPage_div_16_Template, 2, 1, "div", 9);
      \u0275\u0275elementStart(17, "cis-pager", 10);
      \u0275\u0275twoWayListener("pageSizeChange", function ExpenseCategoriesPage_Template_cis_pager_pageSizeChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      })("pageIndexChange", function ExpenseCategoriesPage_Template_cis_pager_pageIndexChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 11)(19, "table", 12)(20, "thead", 13)(21, "tr")(22, "th", 14);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th", 14);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th", 14);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 14);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, ExpenseCategoriesPage_tr_35_Template, 14, 13, "tr", 15)(36, ExpenseCategoriesPage_tr_36_Template, 4, 3, "tr", 16);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(37, ExpenseCategoriesPage_div_37_Template, 44, 39, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 17, "nav.expenseCategories"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.perm.canCreate("EXPENSE_CATEGORIES"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.confirmDeleteOpen());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 19, "common.list"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 21, "common.refresh"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("total", ctx.categories().length);
      \u0275\u0275twoWayProperty("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 23, "common.name"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 25, "common.description"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 27, "common.status"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 29, "common.actions"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.displayedCategories());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.categories().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dialogOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RowActionsMenuComponent, PagerComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpenseCategoriesPage, [{
    type: Component,
    args: [{ selector: "cis-expense-categories-page", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RowActionsMenuComponent, PagerComponent], template: `<div class="flex items-center justify-between">\r
  <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">{{ 'nav.expenseCategories' | translate }}</h2>\r
  <div class="flex items-center gap-2">\r
    <button\r
      *ngIf="perm.canCreate('EXPENSE_CATEGORIES')"\r
      class="rounded-xl bg-pink-500 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
      (click)="openCreate()"\r
      [disabled]="loading()"\r
    >\r
      {{ 'common.add' | translate }} {{ 'common.category' | translate }}\r
    </button>\r
  </div>\r
</div>\r
\r
<div *ngIf="confirmDeleteOpen()" class="cis-modal-overlay fixed inset-0 z-50">\r
  <div class="absolute inset-0 bg-slate-900/40" (click)="cancelDeleteConfirm()"></div>\r
  <div class="absolute inset-0 flex items-center justify-center p-4">\r
    <div\r
      class="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.delete' | translate }} {{ 'common.category' | translate }}?</div>\r
      <div class="mt-2 text-sm text-slate-600 dark:text-slate-400">\r
        {{ 'common.deleteConfirm' | translate }}\r
      </div>\r
\r
      <div class="mt-5 flex items-center justify-end gap-2">\r
        <button\r
          type="button"\r
          class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"\r
          (click)="cancelDeleteConfirm()"\r
        >\r
          {{ 'common.cancel' | translate }}\r
        </button>\r
        <button\r
          type="button"\r
          class="rounded-xl bg-[#B81104] px-4 py-2 text-sm font-semibold text-white hover:bg-[#7f0c03]"\r
          (click)="confirmDelete()"\r
        >\r
          {{ 'common.delete' | translate }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="mt-4 grid grid-cols-1 gap-4">\r
  <section class="rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">\r
    <div class="flex items-center justify-between">\r
      <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ 'common.list' | translate }}</h3>\r
      <button\r
        class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70"\r
        (click)="load()"\r
        [disabled]="loading()"\r
      >\r
        {{ 'common.refresh' | translate }}\r
      </button>\r
    </div>\r
\r
    <div class="mt-3 text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
\r
    <cis-pager class="mt-3 block" [total]="categories().length" [(pageSize)]="pageSize" [(pageIndex)]="pageIndex" />\r
\r
    <div class="mt-3 overflow-auto rounded-xl ring-1 ring-slate-100 dark:ring-slate-700">\r
      <table class="w-full border-collapse text-sm">\r
        <thead class="bg-slate-50 dark:bg-slate-700">\r
          <tr>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.name' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.description' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.status' | translate }}</th>\r
            <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">{{ 'common.actions' | translate }}</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let c of displayedCategories()" class="border-t border-slate-100 dark:border-slate-700">\r
            <td class="px-3 py-2 font-semibold text-slate-900 dark:text-slate-300">{{ c.name }}</td>\r
            <td class="px-3 py-2 text-slate-900 dark:text-slate-300">{{ c.description || '-' }}</td>\r
            <td class="px-3 py-2">\r
              <span class="text-slate-800 dark:text-slate-300" [class.text-[#B81104]]="!c.active" [class.dark\\:text-red-400]="!c.active">{{ c.active ? ('common.active' | translate) : ('common.inactive' | translate) }}</span>\r
            </td>\r
            <td class="px-3 py-2">\r
              <cis-row-actions>\r
                <button\r
                  *ngIf="perm.canEdit('EXPENSE_CATEGORIES')"\r
                  class="cis-row-action"\r
                  (click)="openEdit(c)"\r
                  [disabled]="loading()"\r
                >\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>\r
                  {{ 'common.edit' | translate }}\r
                </button>\r
                <button\r
                  *ngIf="perm.canDelete('EXPENSE_CATEGORIES')"\r
                  class="cis-row-action cis-row-action-danger"\r
                  (click)="openDeleteConfirm(c)"\r
                  [disabled]="loading()"\r
                >\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>\r
                  {{ 'common.delete' | translate }}\r
                </button>\r
              </cis-row-actions>\r
            </td>\r
          </tr>\r
          <tr *ngIf="!categories().length" class="border-t border-slate-100 dark:border-slate-700">\r
            <td class="px-3 py-6 text-center text-sm text-slate-600 dark:text-slate-400" colspan="4">{{ 'common.noData' | translate }}</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </section>\r
</div>\r
\r
<div *ngIf="dialogOpen()" class="cis-modal-overlay fixed inset-0 z-50">\r
  <div class="absolute inset-0 bg-slate-900/40" (click)="closeDialog()"></div>\r
  <div class="absolute inset-0 flex items-center justify-center p-4">\r
    <div class="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl ring-1 ring-slate-200 dark:ring-slate-700" (click)="$event.stopPropagation()">\r
      <div class="flex items-start justify-between gap-4">\r
        <div>\r
          <div class="text-base font-semibold text-slate-900 dark:text-slate-100">{{ editingId() ? ('common.edit' | translate) : ('common.add' | translate) }} {{ 'common.category' | translate }}</div>\r
          <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ 'expenseCategories.manage' | translate }}</div>\r
        </div>\r
        <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200" (click)="closeDialog()">\u2715</button>\r
      </div>\r
\r
      <form class="mt-4 grid gap-3" [formGroup]="form" (ngSubmit)="save()">\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.name' | translate }}\r
          <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="name" />\r
        </label>\r
\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.description' | translate }}\r
          <input class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="description" />\r
        </label>\r
\r
        <label class="grid gap-2 text-xs text-slate-700 dark:text-slate-300">\r
          {{ 'common.status' | translate }}\r
          <select class="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-3 py-2 text-sm text-slate-900 dark:text-slate-100" formControlName="active">\r
            <option [ngValue]="true">{{ 'common.active' | translate }}</option>\r
            <option [ngValue]="false">{{ 'common.inactive' | translate }}</option>\r
          </select>\r
        </label>\r
\r
        <div class="text-sm text-[#B81104] dark:text-red-400" *ngIf="error()">{{ error() }}</div>\r
\r
        <div class="mt-1 flex items-center justify-end gap-2">\r
          <button type="button" class="rounded-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600" (click)="closeDialog()">\r
            {{ 'common.cancel' | translate }}\r
          </button>\r
          <button\r
            class="rounded-xl bg-pink-500 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"\r
            type="submit"\r
            [disabled]="form.invalid || loading()"\r
          >\r
            {{ loading() ? ('common.saving' | translate) : ('common.save' | translate) }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: GraphqlService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpenseCategoriesPage, { className: "ExpenseCategoriesPage", filePath: "app/features/expense-categories/expense-categories.page.ts", lineNumber: 40 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "login", component: LoginPage },
  {
    path: "",
    component: ShellLayout,
    canActivate: [authGuard],
    children: [
      { path: "home", component: HomePage },
      {
        path: "counter",
        loadComponent: () => import("./chunk-5SCOTTYG.js").then((m) => m.CounterPage),
        canDeactivate: [(component) => component.canDeactivate()]
      },
      { path: "dashboard", component: DashboardPage },
      {
        path: "product-dashboard",
        loadComponent: () => import("./chunk-SND7C3MM.js").then((m) => m.ProductDashboardPage)
      },
      { path: "products", component: ProductsPage },
      { path: "categories", component: CategoriesPage },
      {
        path: "inventory",
        loadComponent: () => import("./chunk-OLLJYB42.js").then((m) => m.InventoryPage)
      },
      {
        path: "inventory/analytics",
        loadComponent: () => import("./chunk-7KJ7FDFE.js").then((m) => m.InventoryAnalyticsPage)
      },
      { path: "stock-movements", component: StockMovementsPage },
      {
        path: "purchasing",
        loadComponent: () => import("./chunk-IABPPVI4.js").then((m) => m.PurchasingPage)
      },
      { path: "sales", component: SalesPage },
      { path: "my-sales", component: MySalesPage },
      { path: "my-sales-report", component: MySalesReportPage },
      { path: "expiry-alerts", component: ExpiryAlertsPage },
      { path: "expenses", component: ExpensesPage },
      { path: "expense-categories", component: ExpenseCategoriesPage },
      { path: "reports", component: ReportsPage },
      { path: "profit-management", component: ProfitManagementPage },
      {
        path: "users",
        loadComponent: () => import("./chunk-WTJSFZGF.js").then((m) => m.UsersPage)
      },
      {
        path: "branches",
        loadComponent: () => import("./chunk-SORH27SY.js").then((m) => m.BranchesPage)
      },
      {
        path: "transfers",
        loadComponent: () => import("./chunk-KV2F3KAK.js").then((m) => m.TransfersPage)
      }
    ]
  },
  { path: "**", redirectTo: "home" }
];

// src/app/core/auth/session.service.ts
var IDLE_LIMIT_MS = 30 * 60 * 1e3;
var CHECK_INTERVAL_MS = 15 * 1e3;
var REFRESH_WINDOW_MS = 5 * 60 * 1e3;
var FORBIDDEN_PROBE_COOLDOWN_MS = 10 * 1e3;
var ACTIVITY_EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"];
var SessionService = class _SessionService {
  auth = inject(AuthService);
  gql = inject(GraphqlService);
  router = inject(Router);
  zone = inject(NgZone);
  lastActivity = Date.now();
  timer;
  refreshing = false;
  lastForbiddenProbe = 0;
  started = false;
  start() {
    if (this.started || typeof window === "undefined")
      return;
    this.started = true;
    this.zone.runOutsideAngular(() => {
      for (const event of ACTIVITY_EVENTS) {
        window.addEventListener(event, this.onActivity, { passive: true });
      }
      this.timer = setInterval(() => this.check(), CHECK_INTERVAL_MS);
    });
  }
  onActivity = () => {
    this.lastActivity = Date.now();
    if (!this.auth.accessToken())
      return;
    if (!this.auth.isAuthenticated()) {
      this.expire();
      return;
    }
    this.maybeRefresh();
  };
  check() {
    if (!this.auth.accessToken())
      return;
    if (!this.auth.isAuthenticated() || Date.now() - this.lastActivity > IDLE_LIMIT_MS) {
      this.expire();
    }
  }
  maybeRefresh() {
    const expiresAt = this.auth.expiresAt();
    if (this.refreshing || expiresAt === null || expiresAt - Date.now() > REFRESH_WINDOW_MS)
      return;
    this.refreshing = true;
    this.gql.request("mutation RefreshToken { refreshToken { accessToken } }").subscribe({
      next: (data) => {
        this.auth.setAccessToken(data.refreshToken.accessToken, this.auth.isPersistent());
        this.refreshing = false;
      },
      error: () => {
        this.refreshing = false;
      }
    });
  }
  handleForbidden() {
    if (!this.auth.accessToken())
      return;
    if (!this.auth.isAuthenticated()) {
      this.expire();
      return;
    }
    const now = Date.now();
    if (now - this.lastForbiddenProbe < FORBIDDEN_PROBE_COOLDOWN_MS)
      return;
    this.lastForbiddenProbe = now;
    this.gql.request("query SessionProbe { me { id } }").subscribe({
      next: () => {
      },
      error: (error) => {
        if (error instanceof Error && error.message.includes("Forbidden"))
          this.expire();
      }
    });
  }
  expire() {
    if (!this.auth.accessToken())
      return;
    this.auth.clear();
    if (this.router.url.startsWith("/login"))
      return;
    this.zone.run(() => this.router.navigate(["/login"], { queryParams: { session: "expired" } }));
  }
  static \u0275fac = function SessionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionService, factory: _SessionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/http/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const session = inject(SessionService);
  const token = auth.accessToken();
  const request = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(request).pipe(tap((event) => {
    if (event instanceof HttpResponse) {
      const errors = event.body?.errors;
      if (errors?.some((e) => e?.extensions?.classification === "FORBIDDEN")) {
        session.handleForbidden();
      }
    }
  }), catchError((error) => {
    if (error instanceof HttpErrorResponse && error.status === 401) {
      session.expire();
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes),
    provideCharts(withDefaultRegisterables()),
    provideServiceWorker("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000"
    })
  ]
};

// src/app/app.ts
function App_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "You are offline. Live data and saving require a connection.");
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "An update is ready. Save your work before reloading.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function App_Conditional_0_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pwa.reload());
    });
    \u0275\u0275text(3, "Reload app");
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pwa.installError());
  }
}
function App_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 0);
    \u0275\u0275conditionalCreate(1, App_Conditional_0_Conditional_1_Template, 2, 0, "p", 2);
    \u0275\u0275conditionalCreate(2, App_Conditional_0_Conditional_2_Template, 4, 0);
    \u0275\u0275conditionalCreate(3, App_Conditional_0_Conditional_3_Template, 2, 1, "p", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.pwa.online() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pwa.updateAvailable() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pwa.installError() ? 3 : -1);
  }
}
function App_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 1)(1, "button", 3);
    \u0275\u0275listener("click", function App_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pwa.install());
    });
    \u0275\u0275text(2, "Install NABOO");
    \u0275\u0275elementEnd()();
  }
}
var App = class _App {
  pwa = inject(PwaService);
  title = signal("frontend", ...ngDevMode ? [{ debugName: "title" }] : []);
  constructor() {
    inject(SessionService).start();
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 2, consts: [["aria-label", "App status", 1, "cis-pwa-status"], ["aria-label", "App installation", 1, "cis-install-footer"], ["role", "status"], ["type", "button", 3, "click"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, App_Conditional_0_Template, 4, 3, "aside", 0);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275conditionalCreate(2, App_Conditional_2_Template, 3, 0, "footer", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.pwa.online() || ctx.pwa.updateAvailable() || ctx.pwa.installError() ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.pwa.canInstall() ? 2 : -1);
    }
  }, dependencies: [RouterOutlet], styles: ["\n\n.cis-pwa-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 8px 16px;\n  padding: 10px max(16px, env(safe-area-inset-right)) 10px max(16px, env(safe-area-inset-left));\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n  font-size: 13px;\n}\n.cis-pwa-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.cis-install-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 8px 16px;\n  border-radius: 12px;\n  background: var(--cis-primary);\n  color: #ffffff;\n  font-weight: 600;\n}\n.cis-install-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  right: max(16px, env(safe-area-inset-right));\n  bottom: max(16px, env(safe-area-inset-bottom));\n  z-index: 20;\n}\n.cis-install-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 16px rgba(var(--cis-primary-rgb), 0.2);\n}\n@media (max-width: 767px) {\n  .cis-install-footer[_ngcontent-%COMP%] {\n    bottom: calc(84px + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: `
    @if (!pwa.online() || pwa.updateAvailable() || pwa.installError()) {
      <aside class="cis-pwa-status" aria-label="App status">
        @if (!pwa.online()) {
          <p role="status">You are offline. Live data and saving require a connection.</p>
        }
        @if (pwa.updateAvailable()) {
          <p role="status">An update is ready. Save your work before reloading.</p>
          <button type="button" (click)="pwa.reload()">Reload app</button>
        }
        @if (pwa.installError()) {
          <p role="status">{{ pwa.installError() }}</p>
        }
      </aside>
    }
    <router-outlet />
    @if (pwa.canInstall()) {
      <footer class="cis-install-footer" aria-label="App installation">
        <button type="button" (click)="pwa.install()">Install NABOO</button>
      </footer>
    }
  `, styles: ["/* src/app/app.scss */\n.cis-pwa-status {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 8px 16px;\n  padding: 10px max(16px, env(safe-area-inset-right)) 10px max(16px, env(safe-area-inset-left));\n  background: var(--cis-primary-soft);\n  color: var(--cis-primary-strong);\n  font-size: 13px;\n}\n.cis-pwa-status button,\n.cis-install-footer button {\n  min-height: 44px;\n  padding: 8px 16px;\n  border-radius: 12px;\n  background: var(--cis-primary);\n  color: #ffffff;\n  font-weight: 600;\n}\n.cis-install-footer {\n  position: fixed;\n  right: max(16px, env(safe-area-inset-right));\n  bottom: max(16px, env(safe-area-inset-bottom));\n  z-index: 20;\n}\n.cis-install-footer button {\n  box-shadow: 0 4px 16px rgba(var(--cis-primary-rgb), 0.2);\n}\n@media (max-width: 767px) {\n  .cis-install-footer {\n    bottom: calc(84px + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "app/app.ts", lineNumber: 33 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
