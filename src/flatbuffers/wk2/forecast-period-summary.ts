// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { PrecipitationType } from '../wk2/precipitation-type.js';


export class ForecastPeriodSummary {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ForecastPeriodSummary {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsForecastPeriodSummary(bb:flatbuffers.ByteBuffer, obj?:ForecastPeriodSummary):ForecastPeriodSummary {
  return (obj || new ForecastPeriodSummary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsForecastPeriodSummary(bb:flatbuffers.ByteBuffer, obj?:ForecastPeriodSummary):ForecastPeriodSummary {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ForecastPeriodSummary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

startTime():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

endTime():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

condition():PrecipitationType {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : PrecipitationType.CLEAR;
}

precipitationChance():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : 0;
}

precipitationIntensity():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

static startForecastPeriodSummary(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addStartTime(builder:flatbuffers.Builder, startTime:number) {
  builder.addFieldInt32(0, startTime, 0);
}

static addEndTime(builder:flatbuffers.Builder, endTime:number) {
  builder.addFieldInt32(1, endTime, 0);
}

static addCondition(builder:flatbuffers.Builder, condition:PrecipitationType) {
  builder.addFieldInt8(2, condition, PrecipitationType.CLEAR);
}

static addPrecipitationChance(builder:flatbuffers.Builder, precipitationChance:number) {
  builder.addFieldInt8(3, precipitationChance, 0);
}

static addPrecipitationIntensity(builder:flatbuffers.Builder, precipitationIntensity:number) {
  builder.addFieldFloat32(4, precipitationIntensity, 0.0);
}

static endForecastPeriodSummary(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createForecastPeriodSummary(builder:flatbuffers.Builder, startTime:number, endTime:number, condition:PrecipitationType, precipitationChance:number, precipitationIntensity:number):flatbuffers.Offset {
  ForecastPeriodSummary.startForecastPeriodSummary(builder);
  ForecastPeriodSummary.addStartTime(builder, startTime);
  ForecastPeriodSummary.addEndTime(builder, endTime);
  ForecastPeriodSummary.addCondition(builder, condition);
  ForecastPeriodSummary.addPrecipitationChance(builder, precipitationChance);
  ForecastPeriodSummary.addPrecipitationIntensity(builder, precipitationIntensity);
  return ForecastPeriodSummary.endForecastPeriodSummary(builder);
}
}