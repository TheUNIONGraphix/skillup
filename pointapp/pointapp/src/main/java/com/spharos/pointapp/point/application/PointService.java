package com.spharos.pointapp.point.application;

import com.spharos.pointapp.point.dto.PointAddDto;
import com.spharos.pointapp.point.dto.PointGetDto;

import java.util.List;

public interface PointService {
    void createPoint(PointAddDto pointAddDto);
    List<PointGetDto> getPointByUser(Long userId);
}
