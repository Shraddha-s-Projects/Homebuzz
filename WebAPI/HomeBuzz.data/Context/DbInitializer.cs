using System;
using System.IO;
using System.Linq;
using HomeBuzz.data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace HomeBuzz.data {
    public static class DbInitializer {
        public static void Initialize (HomeBuzzContext context) {
            var exists = new DatabaseChecker ().DatabaseExists (context);

            if (exists == DatabaseExistenceState.Exists) {
                try {
                    context.Database.EnsureCreated ();

                    // Entity Insert
                    // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScript/Entity_Insert.sql"));
                    // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GETPROPERTIES.sql"));
                    // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GETUSERPROPERTYOFFERS.sql"));
                    // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GETUSERPROPERTYCLAIMS.sql"));
                    // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GETPROPERTIESBYPAGINATION_New.sql"));
                    // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GETALLPROPERTYOFFERS.sql"));
                    // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GETMASTERPROPERTYDATA.sql"));
                    // context.Database.ExecuteSqlCommand (File.ReadAllText ("../HomeBuzz.data/SqlScripts/GETPROPERTIESVIEWCOUNT.sql"));
                    // context.Database.ExecuteSqlCommand (File.ReadAllText ("../HomeBuzz.data/SqlScripts/GETUSERPROPERTYLIKES.sql"));
                    //context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GETSIMILARPROPERTYCOUNT.sql"));
                   // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GETUSERINFO.sql"));
                    //  context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GETSubHurbPropertyInfo.sql"));
                    // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GETPROPERTYDETAIL.sql"));
                    // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GETSUBHURBPROPERTIESFORMAP.sql"));
                    // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GET_AGENT_PROPERTIES.sql"));
                    // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GETPROPERTYVIEW.sql"));
                    // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/GETPROPERTYVIEWBYDETAILIDS.sql"));
                    // context.Database.ExecuteSqlCommand(File.ReadAllText("../HomeBuzz.data/SqlScripts/INSERTUPDATEMASTERDATA.sql"));
                    context.SaveChanges ();
                } catch (Exception ex) {
                    //This exception will be thrown if the model has changed
                    //if the context model has changed, then run migrations
                    //runAppMigrations(context);
                }
            } else {
                context.Database.EnsureCreated ();
            }
        }
    }
}