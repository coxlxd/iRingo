// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { CertaintyType } from '../wk2/certainty-type.js';
import { ImportanceType } from '../wk2/importance-type.js';
import { SeverityType } from '../wk2/severity-type.js';
import { SignificanceType } from '../wk2/significance-type.js';
import { UrgencyType } from '../wk2/urgency-type.js';
export class Alert {
    bb = null;
    bb_pos = 0;
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsAlert(bb, obj) {
        return (obj || new Alert()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsAlert(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Alert()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    id() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    areaId(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    unknown3() {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
    }
    attributionUrl(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    countryCode(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    description(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    token(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    effectiveTime() {
        const offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    expireTime() {
        const offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    issuedTime() {
        const offset = this.bb.__offset(this.bb_pos, 22);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    eventOnsetTime() {
        const offset = this.bb.__offset(this.bb_pos, 24);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    eventEndTime() {
        const offset = this.bb.__offset(this.bb_pos, 26);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    detailsUrl(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 28);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    phenomenon(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 30);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    severity() {
        const offset = this.bb.__offset(this.bb_pos, 32);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : SeverityType.UNKNOWN;
    }
    significance() {
        const offset = this.bb.__offset(this.bb_pos, 34);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : SignificanceType.UNKNOWN;
    }
    source(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 36);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    eventSource(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 38);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    urgency() {
        const offset = this.bb.__offset(this.bb_pos, 40);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : UrgencyType.UNKNOWN;
    }
    certainty() {
        const offset = this.bb.__offset(this.bb_pos, 42);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : CertaintyType.UNKNOWN;
    }
    importance() {
        const offset = this.bb.__offset(this.bb_pos, 44);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : ImportanceType.NORMAL;
    }
    responses(index) {
        const offset = this.bb.__offset(this.bb_pos, 46);
        return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
    }
    responsesLength() {
        const offset = this.bb.__offset(this.bb_pos, 46);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    responsesArray() {
        const offset = this.bb.__offset(this.bb_pos, 46);
        return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    }
    unknown23() {
        const offset = this.bb.__offset(this.bb_pos, 48);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
    }
    unknown24() {
        const offset = this.bb.__offset(this.bb_pos, 50);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
    }
    static startAlert(builder) {
        builder.startObject(24);
    }
    static addId(builder, id) {
        builder.addFieldInt32(0, id, 0);
    }
    static addAreaId(builder, areaIdOffset) {
        builder.addFieldOffset(1, areaIdOffset, 0);
    }
    static addUnknown3(builder, unknown3) {
        builder.addFieldInt8(2, unknown3, 0);
    }
    static addAttributionUrl(builder, attributionUrlOffset) {
        builder.addFieldOffset(3, attributionUrlOffset, 0);
    }
    static addCountryCode(builder, countryCodeOffset) {
        builder.addFieldOffset(4, countryCodeOffset, 0);
    }
    static addDescription(builder, descriptionOffset) {
        builder.addFieldOffset(5, descriptionOffset, 0);
    }
    static addToken(builder, tokenOffset) {
        builder.addFieldOffset(6, tokenOffset, 0);
    }
    static addEffectiveTime(builder, effectiveTime) {
        builder.addFieldInt32(7, effectiveTime, 0);
    }
    static addExpireTime(builder, expireTime) {
        builder.addFieldInt32(8, expireTime, 0);
    }
    static addIssuedTime(builder, issuedTime) {
        builder.addFieldInt32(9, issuedTime, 0);
    }
    static addEventOnsetTime(builder, eventOnsetTime) {
        builder.addFieldInt32(10, eventOnsetTime, 0);
    }
    static addEventEndTime(builder, eventEndTime) {
        builder.addFieldInt32(11, eventEndTime, 0);
    }
    static addDetailsUrl(builder, detailsUrlOffset) {
        builder.addFieldOffset(12, detailsUrlOffset, 0);
    }
    static addPhenomenon(builder, phenomenonOffset) {
        builder.addFieldOffset(13, phenomenonOffset, 0);
    }
    static addSeverity(builder, severity) {
        builder.addFieldInt8(14, severity, SeverityType.UNKNOWN);
    }
    static addSignificance(builder, significance) {
        builder.addFieldInt8(15, significance, SignificanceType.UNKNOWN);
    }
    static addSource(builder, sourceOffset) {
        builder.addFieldOffset(16, sourceOffset, 0);
    }
    static addEventSource(builder, eventSourceOffset) {
        builder.addFieldOffset(17, eventSourceOffset, 0);
    }
    static addUrgency(builder, urgency) {
        builder.addFieldInt8(18, urgency, UrgencyType.UNKNOWN);
    }
    static addCertainty(builder, certainty) {
        builder.addFieldInt8(19, certainty, CertaintyType.UNKNOWN);
    }
    static addImportance(builder, importance) {
        builder.addFieldInt8(20, importance, ImportanceType.NORMAL);
    }
    static addResponses(builder, responsesOffset) {
        builder.addFieldOffset(21, responsesOffset, 0);
    }
    static createResponsesVector(builder, data) {
        builder.startVector(1, data.length, 1);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addInt8(data[i]);
        }
        return builder.endVector();
    }
    static startResponsesVector(builder, numElems) {
        builder.startVector(1, numElems, 1);
    }
    static addUnknown23(builder, unknown23) {
        builder.addFieldInt8(22, unknown23, 0);
    }
    static addUnknown24(builder, unknown24) {
        builder.addFieldInt8(23, unknown24, 0);
    }
    static endAlert(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createAlert(builder, id, areaIdOffset, unknown3, attributionUrlOffset, countryCodeOffset, descriptionOffset, tokenOffset, effectiveTime, expireTime, issuedTime, eventOnsetTime, eventEndTime, detailsUrlOffset, phenomenonOffset, severity, significance, sourceOffset, eventSourceOffset, urgency, certainty, importance, responsesOffset, unknown23, unknown24) {
        Alert.startAlert(builder);
        Alert.addId(builder, id);
        Alert.addAreaId(builder, areaIdOffset);
        Alert.addUnknown3(builder, unknown3);
        Alert.addAttributionUrl(builder, attributionUrlOffset);
        Alert.addCountryCode(builder, countryCodeOffset);
        Alert.addDescription(builder, descriptionOffset);
        Alert.addToken(builder, tokenOffset);
        Alert.addEffectiveTime(builder, effectiveTime);
        Alert.addExpireTime(builder, expireTime);
        Alert.addIssuedTime(builder, issuedTime);
        Alert.addEventOnsetTime(builder, eventOnsetTime);
        Alert.addEventEndTime(builder, eventEndTime);
        Alert.addDetailsUrl(builder, detailsUrlOffset);
        Alert.addPhenomenon(builder, phenomenonOffset);
        Alert.addSeverity(builder, severity);
        Alert.addSignificance(builder, significance);
        Alert.addSource(builder, sourceOffset);
        Alert.addEventSource(builder, eventSourceOffset);
        Alert.addUrgency(builder, urgency);
        Alert.addCertainty(builder, certainty);
        Alert.addImportance(builder, importance);
        Alert.addResponses(builder, responsesOffset);
        Alert.addUnknown23(builder, unknown23);
        Alert.addUnknown24(builder, unknown24);
        return Alert.endAlert(builder);
    }
}
