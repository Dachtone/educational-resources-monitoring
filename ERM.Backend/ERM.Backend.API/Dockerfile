#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["ERM.Backend.API/ERM.Backend.API.csproj", "ERM.Backend.API/"]
RUN dotnet restore "ERM.Backend.API/ERM.Backend.API.csproj"
COPY . .
WORKDIR "/src/ERM.Backend.API"
RUN dotnet build "ERM.Backend.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ERM.Backend.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ERM.Backend.API.dll"]