
import   SignaturePad, { Options } from 'signature_pad';
export interface DigitalSignatureProps extends Options {
    canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>
    signaturePadRef?: React.MutableRefObject<SignaturePad | undefined>;
}