using Application.Activities.Commands;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.Validators;

public class EditActivityValidator : BaseActivityValidator<EditActivity.Command, EditActivityDto>
{
    public EditActivityValidator() : base(c => c.ActivityDto)
    {
        RuleFor(c => c.ActivityDto.Id)
            .NotEmpty().WithMessage("Id is required");
    }
}
