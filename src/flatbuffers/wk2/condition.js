// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { ForecastToken } from '../wk2/forecast-token.js';
import { Parameter } from '../wk2/parameter.js';
import { WeatherCondition } from '../wk2/weather-condition.js';
export class Condition {
    bb = null;
    bb_pos = 0;
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsCondition(bb, obj) {
        return (obj || new Condition()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsCondition(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Condition()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    startTime() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    endTime() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    }
    forecastToken() {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : ForecastToken.CLEAR;
    }
    beginCondition() {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : WeatherCondition.CLEAR;
    }
    endCondition() {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : WeatherCondition.CLEAR;
    }
    parameters(index, obj) {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? (obj || new Parameter()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    }
    parametersLength() {
        const offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    static startCondition(builder) {
        builder.startObject(6);
    }
    static addStartTime(builder, startTime) {
        builder.addFieldInt32(0, startTime, 0);
    }
    static addEndTime(builder, endTime) {
        builder.addFieldInt32(1, endTime, 0);
    }
    static addForecastToken(builder, forecastToken) {
        builder.addFieldInt8(2, forecastToken, ForecastToken.CLEAR);
    }
    static addBeginCondition(builder, beginCondition) {
        builder.addFieldInt8(3, beginCondition, WeatherCondition.CLEAR);
    }
    static addEndCondition(builder, endCondition) {
        builder.addFieldInt8(4, endCondition, WeatherCondition.CLEAR);
    }
    static addParameters(builder, parametersOffset) {
        builder.addFieldOffset(5, parametersOffset, 0);
    }
    static createParametersVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startParametersVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static endCondition(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createCondition(builder, startTime, endTime, forecastToken, beginCondition, endCondition, parametersOffset) {
        Condition.startCondition(builder);
        Condition.addStartTime(builder, startTime);
        Condition.addEndTime(builder, endTime);
        Condition.addForecastToken(builder, forecastToken);
        Condition.addBeginCondition(builder, beginCondition);
        Condition.addEndCondition(builder, endCondition);
        Condition.addParameters(builder, parametersOffset);
        return Condition.endCondition(builder);
    }
}
