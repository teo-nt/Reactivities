using Application.Interfaces;
using Application.Profiles.DTOs;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Photos;

public class PhotoService : IPhotoService
{
    public Task<string> DeletePhoto(string publicId)
    {

    }

    public Task<PhotoUploadResult> UploadPhoto(IFormFile file)
    {

    }
}
