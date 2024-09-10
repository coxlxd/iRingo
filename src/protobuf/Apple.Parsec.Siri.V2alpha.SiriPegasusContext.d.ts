// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,keep_enum_prefix,output_javascript
// @generated from protobuf file "Apple.Parsec.Siri.V2alpha.SiriPegasusContext.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message SiriPegasusContext
 */
export interface SiriPegasusContext {
    /**
     * @generated from protobuf field: DeviceState deviceState = 1;
     */
    deviceState?: DeviceState;
    /**
     * @generated from protobuf field: string restrictions = 8;
     */
    restrictions: string;
    /**
     * multiUserContext = 9;
     * contentRatingRestrictions = 10;
     *
     * @generated from protobuf field: M5M14 conversationContext = 14;
     */
    conversationContext?: M5M14;
}
/**
 * @generated from protobuf message DeviceState
 */
export interface DeviceState {
    /**
     * @generated from protobuf field: optional string companionName = 1;
     */
    companionName?: string;
    /**
     * @generated from protobuf field: optional string deviceName = 2;
     */
    deviceName?: string;
    /**
     * @generated from protobuf field: optional string inputOrigin = 3;
     */
    inputOrigin?: string;
    /**
     * @generated from protobuf field: optional bool isAppleTv = 4;
     */
    isAppleTv?: boolean;
    /**
     * @generated from protobuf field: optional bool isCarDnd = 5;
     */
    isCarDnd?: boolean;
    /**
     * @generated from protobuf field: optional bool isCarPlay = 6;
     */
    isCarPlay?: boolean;
    /**
     * @generated from protobuf field: optional bool isEyesFree = 7;
     */
    isEyesFree?: boolean;
    /**
     * @generated from protobuf field: optional bool isHomePod = 8;
     */
    isHomePod?: boolean;
    /**
     * @generated from protobuf field: optional bool isLockedWithPasscode = 9;
     */
    isLockedWithPasscode?: boolean;
    /**
     * @generated from protobuf field: optional bool isMac = 10;
     */
    isMac?: boolean;
    /**
     * @generated from protobuf field: optional bool isMultiUser = 11;
     */
    isMultiUser?: boolean;
    /**
     * @generated from protobuf field: optional bool isPad = 12;
     */
    isPad?: boolean;
    /**
     * @generated from protobuf field: optional bool isPhone = 13;
     */
    isPhone?: boolean;
    /**
     * @generated from protobuf field: optional bool isTextToSpeechEnabled = 14;
     */
    isTextToSpeechEnabled?: boolean;
    /**
     * @generated from protobuf field: optional bool isVox = 15;
     */
    isVox?: boolean;
    /**
     * @generated from protobuf field: optional bool isVoiceGenderFemale = 16;
     */
    isVoiceGenderFemale?: boolean;
    /**
     * @generated from protobuf field: optional bool isVoiceGenderMale = 17;
     */
    isVoiceGenderMale?: boolean;
    /**
     * @generated from protobuf field: optional bool isVoiceGenderUnknown = 18;
     */
    isVoiceGenderUnknown?: boolean;
    /**
     * @generated from protobuf field: optional bool isVoiceTriggerEnabled = 19;
     */
    isVoiceTriggerEnabled?: boolean;
    /**
     * @generated from protobuf field: optional bool isWatch = 20;
     */
    isWatch?: boolean;
}
/**
 * @generated from protobuf message M5M14
 */
export interface M5M14 {
    /**
     * @generated from protobuf field: string cc = 1;
     */
    cc: string;
}
declare class SiriPegasusContext$Type extends MessageType<SiriPegasusContext> {
    constructor();
}
/**
 * @generated MessageType for protobuf message SiriPegasusContext
 */
export declare const SiriPegasusContext: SiriPegasusContext$Type;
declare class DeviceState$Type extends MessageType<DeviceState> {
    constructor();
}
/**
 * @generated MessageType for protobuf message DeviceState
 */
export declare const DeviceState: DeviceState$Type;
declare class M5M14$Type extends MessageType<M5M14> {
    constructor();
}
/**
 * @generated MessageType for protobuf message M5M14
 */
export declare const M5M14: M5M14$Type;
export {};