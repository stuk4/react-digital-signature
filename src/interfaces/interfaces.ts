
import   SignaturePad, { Options } from 'signature_pad';
export interface DigitalSignatureProps extends Options {
    canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>;
    eraseOnResize?:boolean;
    signaturePadRef?: React.MutableRefObject<SignaturePad | undefined>;
}