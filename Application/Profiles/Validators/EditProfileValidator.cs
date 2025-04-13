using Application.Profiles.Commands;
using FluentValidation;

namespace Application.Profiles.Validators;

public class EditProfileValidator : AbstractValidator<EditProfile.Command>
{
    public EditProfileValidator()
    {
        RuleFor(c => c.DisplayName).NotEmpty();
    }
}
