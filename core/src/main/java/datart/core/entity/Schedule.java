package datart.core.entity;

import java.util.Date;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class Schedule extends BaseEntity {
    private String name;

    private String orgId;

    private String type;

    private Boolean active;

    private String cronExpression;

    private Date startDate;

    private Date endDate;

    private String config;

    private String parentId;

    private Boolean isFolder;

    private Integer index;

    private Byte status;
}