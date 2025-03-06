using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CRMApi.Migrations.ProjectDb
{
    /// <inheritdoc />
    public partial class InitialCreateProject : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Developer",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Stack = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Developer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateAssigned = table.Column<DateOnly>(type: "date", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: true),
                    DateStarted = table.Column<DateOnly>(type: "date", nullable: false),
                    DateCompleted = table.Column<DateOnly>(type: "date", nullable: false),
                    DateCanceled = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DeveloperProject",
                columns: table => new
                {
                    DevelopersAssignedId = table.Column<int>(type: "int", nullable: false),
                    ProjectsAssignedId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeveloperProject", x => new { x.DevelopersAssignedId, x.ProjectsAssignedId });
                    table.ForeignKey(
                        name: "FK_DeveloperProject_Developer_DevelopersAssignedId",
                        column: x => x.DevelopersAssignedId,
                        principalTable: "Developer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DeveloperProject_Projects_ProjectsAssignedId",
                        column: x => x.ProjectsAssignedId,
                        principalTable: "Projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DeveloperProject_ProjectsAssignedId",
                table: "DeveloperProject",
                column: "ProjectsAssignedId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DeveloperProject");

            migrationBuilder.DropTable(
                name: "Developer");

            migrationBuilder.DropTable(
                name: "Projects");
        }
    }
}
