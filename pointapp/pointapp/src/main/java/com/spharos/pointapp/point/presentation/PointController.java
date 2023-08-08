package com.spharos.pointapp.point.presentation;

import com.spharos.pointapp.point.application.PointService;
import com.spharos.pointapp.point.dto.PointAddDto;
import com.spharos.pointapp.point.dto.PointGetDto;
import com.spharos.pointapp.point.vo.PointIn;
import com.spharos.pointapp.point.vo.PointOut;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/v1")
public class PointController {

    private final PointService pointService;

    @PostMapping("/point")
    void addPoint(@RequestBody PointIn pointIn) {
        log.info("INPUT Object Data is : {}" , pointIn);
        PointAddDto pointAddDto = PointAddDto.builder()
                .pointType(pointIn.getPointType())
                .point(pointIn.getPoint())
                .used(pointIn.getUsed())
                .loginId(pointIn.getLoginId())
                .build();
        pointService.createPoint(pointAddDto);
    }

    @GetMapping("/point/{userId}")
    public List<PointOut> getPointByUser(@PathVariable Long userId) {
        log.info("INPUT userId is : {}" , userId);
        List<PointGetDto> pointListByUser = pointService.getPointByUser(userId);
        List<PointOut> pointOutList = pointListByUser.stream().map(pointGetDto -> {
            return PointOut.builder()
                    .pointType(pointGetDto.getPointType())
                    .point(pointGetDto.getPoint())
                    .used(pointGetDto.getUsed())
                    .build();
        }).toList();
        log.info("OUTPUT pointOutList is : {}" , pointOutList);
        return pointOutList;
    }
}
