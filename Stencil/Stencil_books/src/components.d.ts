/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface MyAdmin {
        "img": string;
    }
    interface MyAuth {
    }
    interface MyButton {
        "appearance": string;
        "bnttext": string;
    }
    interface MyCart {
    }
    interface MyCategory {
    }
    interface MyEdit {
        "ids": number;
    }
    interface MyExample {
    }
    interface MyExp {
        "cate": any;
    }
    interface MyFooter {
    }
    interface MyMessage {
        "body": string;
        "status": boolean;
        "title": string;
    }
    interface MyModal {
        "img": string;
    }
    interface MyNavbar {
        "user": any;
    }
    interface MyPayment {
    }
    interface MyProfile {
    }
    interface MyRender {
        "ids": any;
        "products": any;
        "whichBtn": string;
    }
    interface MyReview {
        "ids": any;
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLMyAdminElement extends Components.MyAdmin, HTMLStencilElement {
    }
    var HTMLMyAdminElement: {
        prototype: HTMLMyAdminElement;
        new (): HTMLMyAdminElement;
    };
    interface HTMLMyAuthElement extends Components.MyAuth, HTMLStencilElement {
    }
    var HTMLMyAuthElement: {
        prototype: HTMLMyAuthElement;
        new (): HTMLMyAuthElement;
    };
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyCartElement extends Components.MyCart, HTMLStencilElement {
    }
    var HTMLMyCartElement: {
        prototype: HTMLMyCartElement;
        new (): HTMLMyCartElement;
    };
    interface HTMLMyCategoryElement extends Components.MyCategory, HTMLStencilElement {
    }
    var HTMLMyCategoryElement: {
        prototype: HTMLMyCategoryElement;
        new (): HTMLMyCategoryElement;
    };
    interface HTMLMyEditElement extends Components.MyEdit, HTMLStencilElement {
    }
    var HTMLMyEditElement: {
        prototype: HTMLMyEditElement;
        new (): HTMLMyEditElement;
    };
    interface HTMLMyExampleElement extends Components.MyExample, HTMLStencilElement {
    }
    var HTMLMyExampleElement: {
        prototype: HTMLMyExampleElement;
        new (): HTMLMyExampleElement;
    };
    interface HTMLMyExpElement extends Components.MyExp, HTMLStencilElement {
    }
    var HTMLMyExpElement: {
        prototype: HTMLMyExpElement;
        new (): HTMLMyExpElement;
    };
    interface HTMLMyFooterElement extends Components.MyFooter, HTMLStencilElement {
    }
    var HTMLMyFooterElement: {
        prototype: HTMLMyFooterElement;
        new (): HTMLMyFooterElement;
    };
    interface HTMLMyMessageElement extends Components.MyMessage, HTMLStencilElement {
    }
    var HTMLMyMessageElement: {
        prototype: HTMLMyMessageElement;
        new (): HTMLMyMessageElement;
    };
    interface HTMLMyModalElement extends Components.MyModal, HTMLStencilElement {
    }
    var HTMLMyModalElement: {
        prototype: HTMLMyModalElement;
        new (): HTMLMyModalElement;
    };
    interface HTMLMyNavbarElement extends Components.MyNavbar, HTMLStencilElement {
    }
    var HTMLMyNavbarElement: {
        prototype: HTMLMyNavbarElement;
        new (): HTMLMyNavbarElement;
    };
    interface HTMLMyPaymentElement extends Components.MyPayment, HTMLStencilElement {
    }
    var HTMLMyPaymentElement: {
        prototype: HTMLMyPaymentElement;
        new (): HTMLMyPaymentElement;
    };
    interface HTMLMyProfileElement extends Components.MyProfile, HTMLStencilElement {
    }
    var HTMLMyProfileElement: {
        prototype: HTMLMyProfileElement;
        new (): HTMLMyProfileElement;
    };
    interface HTMLMyRenderElement extends Components.MyRender, HTMLStencilElement {
    }
    var HTMLMyRenderElement: {
        prototype: HTMLMyRenderElement;
        new (): HTMLMyRenderElement;
    };
    interface HTMLMyReviewElement extends Components.MyReview, HTMLStencilElement {
    }
    var HTMLMyReviewElement: {
        prototype: HTMLMyReviewElement;
        new (): HTMLMyReviewElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "my-admin": HTMLMyAdminElement;
        "my-auth": HTMLMyAuthElement;
        "my-button": HTMLMyButtonElement;
        "my-cart": HTMLMyCartElement;
        "my-category": HTMLMyCategoryElement;
        "my-edit": HTMLMyEditElement;
        "my-example": HTMLMyExampleElement;
        "my-exp": HTMLMyExpElement;
        "my-footer": HTMLMyFooterElement;
        "my-message": HTMLMyMessageElement;
        "my-modal": HTMLMyModalElement;
        "my-navbar": HTMLMyNavbarElement;
        "my-payment": HTMLMyPaymentElement;
        "my-profile": HTMLMyProfileElement;
        "my-render": HTMLMyRenderElement;
        "my-review": HTMLMyReviewElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface MyAdmin {
        "img"?: string;
    }
    interface MyAuth {
    }
    interface MyButton {
        "appearance"?: string;
        "bnttext"?: string;
    }
    interface MyCart {
    }
    interface MyCategory {
    }
    interface MyEdit {
        "ids"?: number;
    }
    interface MyExample {
    }
    interface MyExp {
        "cate"?: any;
    }
    interface MyFooter {
    }
    interface MyMessage {
        "body"?: string;
        "status"?: boolean;
        "title"?: string;
    }
    interface MyModal {
        "img"?: string;
    }
    interface MyNavbar {
        "user"?: any;
    }
    interface MyPayment {
    }
    interface MyProfile {
    }
    interface MyRender {
        "ids"?: any;
        "products"?: any;
        "whichBtn"?: string;
    }
    interface MyReview {
        "ids"?: any;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "my-admin": MyAdmin;
        "my-auth": MyAuth;
        "my-button": MyButton;
        "my-cart": MyCart;
        "my-category": MyCategory;
        "my-edit": MyEdit;
        "my-example": MyExample;
        "my-exp": MyExp;
        "my-footer": MyFooter;
        "my-message": MyMessage;
        "my-modal": MyModal;
        "my-navbar": MyNavbar;
        "my-payment": MyPayment;
        "my-profile": MyProfile;
        "my-render": MyRender;
        "my-review": MyReview;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "my-admin": LocalJSX.MyAdmin & JSXBase.HTMLAttributes<HTMLMyAdminElement>;
            "my-auth": LocalJSX.MyAuth & JSXBase.HTMLAttributes<HTMLMyAuthElement>;
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-cart": LocalJSX.MyCart & JSXBase.HTMLAttributes<HTMLMyCartElement>;
            "my-category": LocalJSX.MyCategory & JSXBase.HTMLAttributes<HTMLMyCategoryElement>;
            "my-edit": LocalJSX.MyEdit & JSXBase.HTMLAttributes<HTMLMyEditElement>;
            "my-example": LocalJSX.MyExample & JSXBase.HTMLAttributes<HTMLMyExampleElement>;
            "my-exp": LocalJSX.MyExp & JSXBase.HTMLAttributes<HTMLMyExpElement>;
            "my-footer": LocalJSX.MyFooter & JSXBase.HTMLAttributes<HTMLMyFooterElement>;
            "my-message": LocalJSX.MyMessage & JSXBase.HTMLAttributes<HTMLMyMessageElement>;
            "my-modal": LocalJSX.MyModal & JSXBase.HTMLAttributes<HTMLMyModalElement>;
            "my-navbar": LocalJSX.MyNavbar & JSXBase.HTMLAttributes<HTMLMyNavbarElement>;
            "my-payment": LocalJSX.MyPayment & JSXBase.HTMLAttributes<HTMLMyPaymentElement>;
            "my-profile": LocalJSX.MyProfile & JSXBase.HTMLAttributes<HTMLMyProfileElement>;
            "my-render": LocalJSX.MyRender & JSXBase.HTMLAttributes<HTMLMyRenderElement>;
            "my-review": LocalJSX.MyReview & JSXBase.HTMLAttributes<HTMLMyReviewElement>;
        }
    }
}
