// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { ComparisonType } from '../wk2/comparison-type.js';
import { DeviationType } from '../wk2/deviation-type.js';
export class Comparison {
    bb = null;
    bb_pos = 0;
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsComparison(bb, obj) {
        return (obj || new Comparison()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsComparison(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Comparison()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    condition() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : ComparisonType.UNKNOWN0;
    }
    currentValue() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
    }
    baselineValue() {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
    }
    deviation() {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : DeviationType.UNKNOWN0;
    }
    baselineType() {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
    }
    baselineStartDate() {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    static startComparison(builder) {
        builder.startObject(6);
    }
    static addCondition(builder, condition) {
        builder.addFieldInt8(0, condition, ComparisonType.UNKNOWN0);
    }
    static addCurrentValue(builder, currentValue) {
        builder.addFieldFloat32(1, currentValue, 0.0);
    }
    static addBaselineValue(builder, baselineValue) {
        builder.addFieldFloat32(2, baselineValue, 0.0);
    }
    static addDeviation(builder, deviation) {
        builder.addFieldInt8(3, deviation, DeviationType.UNKNOWN0);
    }
    static addBaselineType(builder, baselineType) {
        builder.addFieldInt8(4, baselineType, 0);
    }
    static addBaselineStartDate(builder, baselineStartDate) {
        builder.addFieldInt32(5, baselineStartDate, 0);
    }
    static endComparison(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createComparison(builder, condition, currentValue, baselineValue, deviation, baselineType, baselineStartDate) {
        Comparison.startComparison(builder);
        Comparison.addCondition(builder, condition);
        Comparison.addCurrentValue(builder, currentValue);
        Comparison.addBaselineValue(builder, baselineValue);
        Comparison.addDeviation(builder, deviation);
        Comparison.addBaselineType(builder, baselineType);
        Comparison.addBaselineStartDate(builder, baselineStartDate);
        return Comparison.endComparison(builder);
    }
}
