using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.Validators;

public class BaseActivityValidator<T, TDto> : AbstractValidator<T> where TDto : BaseActivityDto
{
    public BaseActivityValidator(Func<T, TDto> selector)
    {
        RuleFor(c => selector(c).Title)
                   .NotEmpty().WithMessage("Title is required")
                   .MaximumLength(100).WithMessage("Title must not exceed 100 characters");
        RuleFor(c => selector(c).Description).NotEmpty().WithMessage("Description is required");
        RuleFor(c => selector(c).Date)
            .GreaterThan(DateTime.UtcNow).WithMessage("Date must be in future");
        RuleFor(c => selector(c).Category).NotEmpty().WithMessage("Category is required");
        RuleFor(c => selector(c).City).NotEmpty().WithMessage("City is required");
        RuleFor(c => selector(c).Venue).NotEmpty().WithMessage("Venue is required");
        RuleFor(c => selector(c).Latitude)
            .NotEmpty().WithMessage("Latitude is required")
            .InclusiveBetween(-90, 90).WithMessage("Latitude should be between -90 and 90.");
        RuleFor(c => selector(c).Longitude)
            .NotEmpty().WithMessage("Longitude is required")
            .InclusiveBetween(-180, 180).WithMessage("Longitude should be between -180 and 180.");
    }
}
