// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { DayWeatherConditions } from '../wk2/day-weather-conditions.js';
import { Metadata } from '../wk2/metadata.js';


export class DailyForecastData {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DailyForecastData {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDailyForecastData(bb:flatbuffers.ByteBuffer, obj?:DailyForecastData):DailyForecastData {
  return (obj || new DailyForecastData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDailyForecastData(bb:flatbuffers.ByteBuffer, obj?:DailyForecastData):DailyForecastData {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DailyForecastData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

metadata(obj?:Metadata):Metadata|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Metadata()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

days(index: number, obj?:DayWeatherConditions):DayWeatherConditions|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new DayWeatherConditions()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

daysLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startDailyForecastData(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addMetadata(builder:flatbuffers.Builder, metadataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, metadataOffset, 0);
}

static addDays(builder:flatbuffers.Builder, daysOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, daysOffset, 0);
}

static createDaysVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startDaysVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endDailyForecastData(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDailyForecastData(builder:flatbuffers.Builder, metadataOffset:flatbuffers.Offset, daysOffset:flatbuffers.Offset):flatbuffers.Offset {
  DailyForecastData.startDailyForecastData(builder);
  DailyForecastData.addMetadata(builder, metadataOffset);
  DailyForecastData.addDays(builder, daysOffset);
  return DailyForecastData.endDailyForecastData(builder);
}
}